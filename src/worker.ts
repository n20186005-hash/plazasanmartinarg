// Worker de Cloudflare que sirve los assets estáticos (dist) y expone
// /api/weather con datos enriquecidos de Open-Meteo. El Worker actúa como
// "server component": obtiene los datos en el servidor y los cachea ~10 min
// mediante la Cache API. La página consulta al abrirse y muestra un aviso
// si no recibe datos válidos; no es una observación dentro de la plaza.

import { fetchWeather } from './lib/weather';

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

type Ctx = { waitUntil: (p: Promise<unknown>) => void };

const CACHE_TTL = 600;

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === 'plazasanmartinarg.com' && url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.href, 308);
    }
    if (url.pathname === '/404' || url.pathname === '/404/' || url.pathname === '/404.html') {
      return errorPage(request, env);
    }
    if (url.pathname === '/api/weather') {
      if (request.method !== 'GET') return new Response(null, { status: 405, headers: { Allow: 'GET' } });
      return handleWeather(request, ctx);
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) return errorPage(request, env);
    return response;
  },
};

async function handleWeather(request: Request, ctx: Ctx): Promise<Response> {
  const cache = (caches as CacheStorage & { default: Cache }).default;
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

async function errorPage(request: Request, env: Env): Promise<Response> {
  const url = new URL('/404.html', request.url);
  const response = await env.ASSETS.fetch(new Request(url));
  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, follow');
  headers.set('Cache-Control', 'no-store');
  return new Response(request.method === 'HEAD' ? null : await response.text(), { status: 404, headers });
}
