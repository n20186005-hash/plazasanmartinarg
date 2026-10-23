(() => {
  const root = document.querySelector('[data-weather-root]');
  if (!root) return;
  const now = root.querySelector('[data-weather-now]');
  const days = root.querySelector('[data-weather-days]');
  const advice = root.querySelector('[data-weather-advice]');
  const note = root.querySelector('[data-weather-note]');
  const esc = (value) => String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
  const fail = () => {
    now.innerHTML = ''; days.innerHTML = ''; advice.innerHTML = '';
    note.hidden = false;
    note.textContent = 'No se pudo cargar el pronóstico. Consultá el Servicio Meteorológico Nacional y volvé a intentarlo más tarde.';
  };
  const valid = (data) => data && Number.isFinite(data.current?.temp) && Number.isFinite(data.current?.apparent) && Number.isFinite(data.current?.humidity) && Number.isFinite(data.current?.wind) && Number.isFinite(data.current?.precipProb) && typeof data.current?.label === 'string' && Array.isArray(data.daily) && data.daily.length > 0 && data.daily.every((day) => Number.isFinite(day.tMax) && Number.isFinite(day.tMin) && Number.isFinite(day.precipProb) && typeof day.label === 'string') && Number.isFinite(Date.parse(data.updated));
  fetch('/api/weather', { signal: AbortSignal.timeout(10000), cache: 'no-store' })
    .then((response) => { if (!response.ok) throw new Error('unavailable'); return response.json(); })
    .then((data) => {
      if (!valid(data)) throw new Error('invalid');
      const current = data.current;
      now.innerHTML = '<div class="weather-now-main"><span class="weather-icon" aria-hidden="true">' + esc(current.icon) + '</span><div><strong class="weather-temp">' + esc(current.temp) + ' °C</strong><span class="weather-label">' + esc(current.label) + '</span></div></div><dl class="weather-meta"><div><dt>Sensación</dt><dd>' + esc(current.apparent) + ' °C</dd></div><div><dt>Humedad</dt><dd>' + esc(current.humidity) + '%</dd></div><div><dt>Viento</dt><dd>' + esc(current.wind) + ' km/h</dd></div><div><dt>Lluvia hoy</dt><dd>' + esc(current.precipProb) + '%</dd></div></dl>';
      days.innerHTML = data.daily.map((day) => '<li><span class="wd-day">' + esc(day.weekday) + '</span><span class="wd-icon" aria-hidden="true">' + esc(day.icon) + '</span><span class="wd-label">' + esc(day.label) + '</span><span class="wd-temp"><strong>' + esc(day.tMax) + '°</strong> / ' + esc(day.tMin) + '°</span><span class="wd-rain">' + esc(day.precipProb) + '%</span></li>').join('');
      const sections = [['risk', 'Precaución'], ['outfit', 'Vestimenta'], ['activities', 'Plan de visita'], ['items', 'Qué llevar']];
      advice.innerHTML = '<div class="advice-grid">' + sections.map(([key, title]) => Array.isArray(data.advice?.[key]) && data.advice[key].length ? '<div class="advice-card"><h3>' + title + '</h3><ul>' + data.advice[key].map((text) => '<li>' + esc(text) + '</li>').join('') + '</ul></div>' : '').join('') + '</div>';
      note.hidden = false;
      note.textContent = 'Consulta: ' + new Intl.DateTimeFormat('es-AR', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date(data.updated)) + ' (hora de Córdoba). Pronóstico orientativo, no una observación en la plaza.';
    }).catch(fail);
})();
