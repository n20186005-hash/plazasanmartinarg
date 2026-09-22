// Utilidades de clima compartidas entre el build (SSR inicial), el Worker de
// Cloudflare (/api/weather) y el render del cliente. Solo usa APIs web estándar
// (fetch, URLSearchParams, Intl). No se hace referencia a proveedores en la UI.

export const LAT = -31.41628;
export const LON = -64.18402;
export const TIMEZONE = 'America/Argentina/Buenos_Aires';

export interface EnrichedWeather {
  updated: string;
  current: {
    temp: number;
    apparent: number;
    humidity: number;
    wind: number;
    isDay: boolean;
    precip: number;
    code: number;
    label: string;
    icon: string;
    precipProb: number;
    umbrella: boolean;
  };
  daily: Array<{
    date: string;
    weekday: string;
    code: number;
    label: string;
    icon: string;
    tMax: number;
    tMin: number;
    precipProb: number;
    uv: number;
  }>;
  advice: WeatherAdvice;
}

export interface WeatherAdvice {
  outfit: string[];
  activities: string[];
  items: string[];
  risk: string[];
}

// Códigos WMO (https://open-meteo.com/en/docs) mapeados a texto en español.
const WMO: Record<number, { day: string; night: string; icon: string }> = {
  0: { day: 'Despejado', night: 'Despejado (noche)', icon: '☀️' },
  1: { day: 'Mayormente despejado', night: 'Mayormente despejado', icon: '🌤️' },
  2: { day: 'Parcialmente nublado', night: 'Parcialmente nublado', icon: '⛅' },
  3: { day: 'Nublado', night: 'Nublado', icon: '☁️' },
  45: { day: 'Niebla', night: 'Niebla', icon: '🌫️' },
  48: { day: 'Niebla con escarcha', night: 'Niebla con escarcha', icon: '🌫️' },
  51: { day: 'Llovizna ligera', night: 'Llovizna ligera', icon: '🌦️' },
  53: { day: 'Llovizna', night: 'Llovizna', icon: '🌦️' },
  55: { day: 'Llovizna intensa', night: 'Llovizna intensa', icon: '🌦️' },
  56: { day: 'Llovizna helada', night: 'Llovizna helada', icon: '🌧️' },
  57: { day: 'Llovizna helada', night: 'Llovizna helada', icon: '🌧️' },
  61: { day: 'Lluvia leve', night: 'Lluvia leve', icon: '🌧️' },
  63: { day: 'Lluvia', night: 'Lluvia', icon: '🌧️' },
  65: { day: 'Lluvia intensa', night: 'Lluvia intensa', icon: '🌧️' },
  66: { day: 'Lluvia helada', night: 'Lluvia helada', icon: '🌧️' },
  67: { day: 'Lluvia helada', night: 'Lluvia helada', icon: '🌧️' },
  71: { day: 'Nieve leve', night: 'Nieve leve', icon: '🌨️' },
  73: { day: 'Nieve', night: 'Nieve', icon: '🌨️' },
  75: { day: 'Nieve intensa', night: 'Nieve intensa', icon: '🌨️' },
  77: { day: 'Granizo menudo', night: 'Granizo menudo', icon: '🌨️' },
  80: { day: 'Chubascos leves', night: 'Chubascos leves', icon: '🌦️' },
  81: { day: 'Chubascos', night: 'Chubascos', icon: '🌦️' },
  82: { day: 'Chubascos intensos', night: 'Chubascos intensos', icon: '⛈️' },
  85: { day: 'Chubascos de nieve', night: 'Chubascos de nieve', icon: '🌨️' },
  86: { day: 'Chubascos de nieve', night: 'Chubascos de nieve', icon: '🌨️' },
  95: { day: 'Tormenta eléctrica', night: 'Tormenta eléctrica', icon: '⛈️' },
  96: { day: 'Tormenta con granizo', night: 'Tormenta con granizo', icon: '⛈️' },
  99: { day: 'Tormenta con granizo', night: 'Tormenta con granizo', icon: '⛈️' },
};

export function describeWeather(code: number, isDay = true): { label: string; icon: string } {
  const entry = WMO[code] ?? { day: 'Condición variable', night: 'Condición variable', icon: '🌡️' };
  return { label: isDay ? entry.day : entry.night, icon: entry.icon };
}

export function formatDayLabel(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return new Intl.DateTimeFormat('es-AR', { weekday: 'long' }).format(d);
}

export function buildWeatherUrl(): string {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max',
    timezone: TIMEZONE,
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

export function enrichWeather(raw: any): EnrichedWeather {
  const cur = raw?.current ?? {};
  const daily = raw?.daily ?? {};
  const todayProb = Array.isArray(daily.precipitation_probability_max)
    ? Number(daily.precipitation_probability_max[0] ?? 0)
    : 0;
  const isDay = cur.is_day === 1 || cur.is_day === true;
  const curDesc = describeWeather(Number(cur.weather_code ?? 0), isDay);
  const precip = Number(cur.precipitation ?? 0);
  const umbrella = precip > 0.1 || todayProb >= 40;

  const dailyOut = (Array.isArray(daily.time) ? daily.time : []).map((date: string, i: number) => {
    const desc = describeWeather(Number(daily.weather_code?.[i] ?? 0), true);
    return {
      date,
      weekday: formatDayLabel(date),
      code: Number(daily.weather_code?.[i] ?? 0),
      label: desc.label,
      icon: desc.icon,
      tMax: Math.round(Number(daily.temperature_2m_max?.[i] ?? 0)),
      tMin: Math.round(Number(daily.temperature_2m_min?.[i] ?? 0)),
      precipProb: Number(daily.precipitation_probability_max?.[i] ?? 0),
      uv: Math.round(Number(daily.uv_index_max?.[i] ?? 0)),
    };
  });

  const advice = generateAdvice(
    {
      code: Number(cur.weather_code ?? 0),
      apparent: Math.round(Number(cur.apparent_temperature ?? cur.temperature_2m ?? 0)),
      humidity: Math.round(Number(cur.relative_humidity_2m ?? 0)),
      wind: Math.round(Number(cur.wind_speed_10m ?? 0)),
      precip,
    },
    dailyOut[0] ?? {
      code: Number(cur.weather_code ?? 0),
      tMax: Math.round(Number(cur.temperature_2m ?? 0)),
      tMin: Math.round(Number(cur.temperature_2m ?? 0)),
      precipProb: todayProb,
      uv: 0,
    }
  );

  return {
    updated: new Date().toISOString(),
    current: {
      temp: Math.round(Number(cur.temperature_2m ?? 0)),
      apparent: Math.round(Number(cur.apparent_temperature ?? cur.temperature_2m ?? 0)),
      humidity: Math.round(Number(cur.relative_humidity_2m ?? 0)),
      wind: Math.round(Number(cur.wind_speed_10m ?? 0)),
      isDay,
      precip,
      code: Number(cur.weather_code ?? 0),
      label: curDesc.label,
      icon: curDesc.icon,
      precipProb: todayProb,
      umbrella,
    },
    daily: dailyOut,
    advice,
  };
}

// Convierte km/h a escala de Beaufort para razonar en "grados de viento" del visitante.
function beaufort(kmh: number): number {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  if (kmh < 118) return 11;
  return 12;
}

const RAIN_CODES = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82];
const STORM_CODES = [95, 96, 99];
const FOG_CODES = [45, 48];

// Lógica de sugerencias para el visitante: traduce los datos del clima a
// consejos ejecutables (vestimenta, plan de visita, qué llevar y precauciones).
// No usa jerga meteorológica y oculta las categorías que no aplican.
export function generateAdvice(
  cur: { code: number; apparent: number; humidity: number; wind: number; precip: number },
  today: { code: number; tMax: number; tMin: number; precipProb: number; uv: number }
): WeatherAdvice {
  const outfit: string[] = [];
  const activities: string[] = [];
  const items: string[] = [];
  const risk: string[] = [];

  const codes = [today.code, cur.code];
  const isRain = codes.some((c) => RAIN_CODES.includes(c));
  const isStorm = codes.some((c) => STORM_CODES.includes(c));
  const isFog = codes.some((c) => FOG_CODES.includes(c));
  const isHeavy = [65, 82].includes(today.code) || today.precipProb >= 70 || cur.precip > 5;

  const tMax = today.tMax;
  const tMin = today.tMin;
  const range = tMax - tMin;
  const bf = beaufort(cur.wind);

  if (isStorm) {
    risk.push('Tormenta eléctrica: no te refugies bajo árboles ni en zonas descubiertas; evitá el agua y el metal.');
    activities.push('Esperá la tormenta en un espacio cubierto; el paseo al aire libre no es recomendable ahora.');
    items.push('Paraguas o impermeable.');
  } else if (isHeavy) {
    risk.push('Lluvia intensa: evitá permanecer bajo árboles ni en zonas bajas; el paseo al aire libre se complica.');
    activities.push('Priorizá espacios cubiertos o interiores cercanos (galerías o museos del centro).');
    items.push('Impermeable o poncho; el paraguas largo se complica con viento.');
  } else if (isRain || today.precipProb >= 60) {
    items.push('Paraguas o impermeable (probabilidad de lluvia alta).');
    activities.push('Si llueve, las veredas estarán resbaladizas: caminá con calzado adecuado.');
  } else if (today.precipProb >= 30) {
    items.push('Conviene llevar paraguas por si acaso (lluvia moderada posible).');
  }

  if (tMax >= 32) {
    outfit.push('Hace calor: ropa ligera y transpirable.');
    activities.push('Evitá la hora central bajo el sol; buscá la sombra de las arboledas y hacé pausas.');
    items.push('Protector solar y agua suficiente.');
  }
  if (today.uv >= 5) {
    items.push('Protector solar, anteojos de sol y gorra.');
    activities.push('La radiación es fuerte: cuidá piel y cabeza, sobre todo al mediodía.');
  }

  if (range > 8) outfit.push('Amplitud térmica grande: llevá una prenda para abrigarte hacia la tarde o la noche.');
  if (tMax <= 10) {
    outfit.push('Frío: abrigo y, si hay viento, una bufanda.');
  } else if (tMin <= 6) {
    outfit.push('Mañanas y noches frescas: una campera liviana alcanza.');
  }

  if (bf >= 7) {
    risk.push('Viento fuerte: alejate de carteles, andamios y ramas; en la plaza evitá las arboledas grandes.');
    items.push('Evitá sombreros de ala ancha que se vuelan.');
  } else if (bf >= 5) {
    outfit.push('Viento moderado a fuerte: una prenda de abrigo ayuda.');
    activities.push('Con viento, el paseo al aire libre se siente más frío; aprovechá las galerías.');
    items.push('Sujetá sombreros y papeles sueltos.');
  }

  if (!isRain && !isStorm && !isFog) {
    if (today.code === 0 || today.code === 1) {
      activities.push('Día despejado: ideal para recorrer la plaza y el casco histórico a pie.');
    } else if (today.code === 2) {
      activities.push('Buen momento para caminar: sol y nubes se alternan.');
    } else if (today.code === 3) {
      activities.push('Luz suave y sin sol fuerte: ideal para fotos y para estar al aire libre.');
    }
  }

  if (isFog) {
    risk.push('Niebla: la visibilidad baja; no es el mejor momento para fotos lejanas ni para apurar el traslado.');
  }

  if (cur.apparent <= 4 && tMin > 4) outfit.push('La sensación térmica es más baja: abrigate un poco más.');
  if (cur.apparent >= 35) items.push('Hidratate bien: la sensación térmica es muy alta.');

  if (cur.humidity >= 80) outfit.push('Humedad alta: preferí ropa transpirable.');
  else if (cur.humidity > 0 && cur.humidity <= 25) items.push('El ambiente está seco: hidratate.');

  return { outfit, activities, items, risk };
}

export async function fetchWeather(signal?: AbortSignal): Promise<EnrichedWeather | null> {
  try {
    const res = await fetch(buildWeatherUrl(), signal ? { signal } : undefined);
    if (!res.ok) return null;
    return enrichWeather(await res.json());
  } catch {
    return null;
  }
}
