(() => {
  const KEY = 'psm-consent-v1';
  const VETO = 'psm-consent-refusal';
  const GA_ID = 'G-HXM22WWPKP';
  const defaults = { analytics: false, preferences: false, marketing: false };
  let refused = false;
  let effective = { ...defaults };
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  const normalized = (value) => ({ analytics: value?.analytics === true, preferences: value?.preferences === true, marketing: false });
  const read = () => {
    try {
      if (refused || sessionStorage.getItem(VETO)) return { ...defaults };
      return normalized(JSON.parse(localStorage.getItem(KEY) || '{}'));
    } catch { return { ...defaults }; }
  };
  const apply = (choice) => {
    effective = normalized(choice);
    window['ga-disable-' + GA_ID] = !effective.analytics;
    window.gtag('consent', 'update', { analytics_storage: effective.analytics ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    if (effective.analytics && !window.__psmGaLoaded) {
      window.__psmGaLoaded = true;
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { anonymize_ip: true });
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
      document.head.appendChild(script);
    }
  };
  const notify = () => window.dispatchEvent(new CustomEvent('psm-consent-changed'));
  // Refuse immediately, then verify persisted refusal or removal. A failed
  // persistence operation must never be reported as a saved grant.
  const refuse = () => {
    refused = true;
    apply(defaults);
    let tab = false;
    let shared = false;
    try { sessionStorage.setItem(VETO, '1'); tab = sessionStorage.getItem(VETO) === '1'; } catch {}
    try {
      localStorage.setItem(KEY, JSON.stringify(defaults));
      const saved = JSON.parse(localStorage.getItem(KEY));
      shared = saved !== null && saved.analytics === false && saved.preferences === false;
    } catch {}
    if (!shared) {
      try { localStorage.removeItem(KEY); shared = localStorage.getItem(KEY) === null; } catch {}
    }
    notify();
    return { saved: shared, choice: { ...defaults }, message: shared
      ? 'Opciones desactivadas y rechazo guardado en este navegador.'
      : 'Opciones desactivadas ' + (tab ? 'en esta pestaña, incluso al recargar.' : 'solo en esta página.') + ' No pudimos confirmar el rechazo guardado: otras pestañas o futuras visitas podrían usar un permiso anterior, incluso el de este intento. Revisá o borrá el almacenamiento del sitio.' };
  };
  window.psmConsent = {
    key: KEY, read,
    save(next) {
      const choice = normalized(next);
      if (!choice.analytics && !choice.preferences) return refuse();
      // Check both storage interfaces before publishing any shared permission.
      try {
        sessionStorage.getItem(VETO);
        sessionStorage.removeItem(VETO);
        if (sessionStorage.getItem(VETO) !== null) return refuse();
        localStorage.getItem(KEY);
        localStorage.setItem(KEY, JSON.stringify(choice));
        const stored = normalized(JSON.parse(localStorage.getItem(KEY) || '{}'));
        if (stored.analytics !== choice.analytics || stored.preferences !== choice.preferences) return refuse();
        refused = false;
        const final = read();
        if (final.analytics !== choice.analytics || final.preferences !== choice.preferences) return refuse();
        apply(final);
        notify();
        return { saved: true, choice: final, message: 'Preferencias guardadas en este navegador.' };
      } catch { return refuse(); }
    }
  };
  window.addEventListener('storage', (event) => {
    if (event.key === KEY || event.key === null) {
      apply(read());
      notify();
    }
  });
  apply(read());
})();
