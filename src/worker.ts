// Worker de Cloudflare que sirve los assets estáticos (dist) y expone
// /api/weather con datos enriquecidos de Open-Meteo. El Worker actúa como
// "server component": obtiene los datos en el servidor y los cachea ~10 min
// mediante la Cache API, de modo que el visitante siempre vea información
// actual sin recargar la página ni consultar la API directamente.

import { fetchWeather } from './lib/weather';

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

type Ctx = { waitUntil: (p: Promise<unknown>) => void };

const CACHE_TTL = 600;

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') {
      return handleWeather(request, ctx);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleWeather(request: Request, ctx: Ctx): Promise<Response> {
  const cache = caches.default;
  const cached = await cache.match(request);
  if (cached) return cached;

  const data = await fetchWeather();
  if (!data) {
    return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const response = new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': `public, max-age=${CACHE_TTL}, s-maxage=${CACHE_TTL}`,
      'Access-Control-Allow-Origin': '*',
    },
  });
  ctx.waitUntil(cache.put(request, response.clone()));
  return response;
}
