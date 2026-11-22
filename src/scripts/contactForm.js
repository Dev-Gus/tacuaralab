// @ts-check

/** @typedef {{ render: (element: HTMLElement, options: Record<string, unknown>) => string, reset: (id: string) => void }} CaptchaAPI */
const captchaWindow = /** @type {Window & typeof globalThis & { hcaptcha?: CaptchaAPI, tacuaraContactCaptchaReady?: () => void }} */ (window);

/** @param {HTMLFormElement} form */
function enhanceContactForm(form) {
  const buttonElement = form.querySelector('button[type="submit"]');
  const statusElement = form.querySelector('[data-form-status]');
  const captchaElement = form.querySelector('[data-form-captcha]');
  if (!(buttonElement instanceof HTMLButtonElement) || !(statusElement instanceof HTMLElement) || !(captchaElement instanceof HTMLElement)) return;
  const button = buttonElement;
  const status = statusElement;
  const captcha = captchaElement;

  const idleLabel = button.textContent;
  const fields = [...form.querySelectorAll('input[required], textarea[required]')];
  let sending = false;
  /** @type {HTMLScriptElement | null} */
  let captchaScript = null;
  /** @type {string | undefined} */
  let widgetId;

  /** @param {string | undefined} message @param {boolean} [moveFocus] */
  function showStatus(message, moveFocus = false) {
    status.textContent = message ?? '';
    status.hidden = !message;
    if (moveFocus) status.focus();
  }

  /** @param {HTMLInputElement | HTMLTextAreaElement} field */
  function validateField(field) {
    const error = document.getElementById(`${field.id}-error`);
    if (!error) return;
    const validity = field.validity;
    error.textContent = (validity.valid ? '' : validity.valueMissing ? form.dataset.required
      : validity.typeMismatch ? form.dataset.invalidEmail : validity.tooLong ? form.dataset.tooLong : field.validationMessage) ?? '';
    error.hidden = validity.valid;
    if (validity.valid) field.removeAttribute('aria-invalid');
    else field.setAttribute('aria-invalid', 'true');
  }

  form.addEventListener('invalid', (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) validateField(event.target);
  }, true);
  form.addEventListener('input', (event) => {
    const field = event.target;
    if ((field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.hasAttribute('aria-invalid')) validateField(field);
  });

  // The documented free-plan manual integration; no third-party request until
  // someone interacts with this form. The onload callback avoids render races.
  function loadCaptcha() {
    if (captchaScript) return;
    captcha.hidden = false;
    captchaWindow.tacuaraContactCaptchaReady = () => {
      if (!captchaWindow.hcaptcha) return;
      widgetId = captchaWindow.hcaptcha.render(captcha, {
        sitekey: captcha.dataset.sitekey,
        hl: document.documentElement.lang,
        size: 'compact',
        callback: () => showStatus(''),
        'expired-callback': () => showStatus(form.dataset.captchaRequired),
        'error-callback': () => showStatus(form.dataset.error),
      });
    };
    captchaScript = document.createElement('script');
    captchaScript.src = 'https://js.hcaptcha.com/1/api.js?onload=tacuaraContactCaptchaReady&render=explicit&recaptchacompat=off';
    captchaScript.async = true;
    captchaScript.defer = true;
    captchaScript.addEventListener('error', () => {
      captchaScript?.remove();
      captchaScript = null;
      showStatus(form.dataset.error);
    }, { once: true });
    document.body.append(captchaScript);
  }

  form.addEventListener('focusin', loadCaptcha);
  form.addEventListener('pointerdown', loadCaptcha);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    loadCaptcha();
    const data = new FormData(form);
    if (!data.get('h-captcha-response')) {
      showStatus(form.dataset.captchaRequired, true);
      return;
    }

    sending = true;
    button.disabled = true;
    button.textContent = form.dataset.sending ?? '';
    form.setAttribute('aria-busy', 'true');
    showStatus(form.dataset.sending, true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result?.success !== true) throw new Error('Submission failed');
      form.reset();
      for (const field of fields) {
        field.removeAttribute('aria-invalid');
        const error = document.getElementById(`${field.id}-error`);
        if (error) { error.textContent = ''; error.hidden = true; }
      }
      showStatus(form.dataset.success, true);
    } catch {
      showStatus(form.dataset.error, true);
    } finally {
      window.clearTimeout(timeout);
      // A captcha token is single-use, including after an unsuccessful request.
      if (widgetId !== undefined) captchaWindow.hcaptcha?.reset(widgetId);
      const token = form.querySelector('[name="h-captcha-response"]');
      if (token instanceof HTMLTextAreaElement || token instanceof HTMLInputElement) token.value = '';
      sending = false;
      button.disabled = false;
      button.textContent = idleLabel;
      form.removeAttribute('aria-busy');
    }
  });
}

const form = document.querySelector('[data-contact-form]');
if (form instanceof HTMLFormElement) enhanceContactForm(form);
