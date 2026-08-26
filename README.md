# Plaza San Martín Córdoba — guía cultural independiente

Sitio informativo de una sola página principal, con páginas legales independientes. Está diseñado para desplegarse como sitio estático en Cloudflare Workers Assets.

## Tecnología

- Astro 7
- Tailwind CSS 4
- TypeScript 6
- pnpm
- Cloudflare Workers con Wrangler
- Sin base de datos, autenticación ni CMS

## Dominio y URL canónica

El dominio se configura **solo** mediante `SITE_URL`. La configuración de Astro lo toma desde `astro.config.ts` y activa `@astrojs/sitemap` únicamente cuando esa variable contiene un dominio real.

```bash
SITE_URL=https://dominio-real.ar pnpm build
```

Si `SITE_URL` está vacío, el proyecto sigue construyendo: no emite canonical ni `og:url` absolutos y no genera sitemap. Nunca introduce un dominio ficticio.

## Estado del lockfile

El entorno de entrega no tuvo acceso DNS al registro de npm. Por transparencia, el `pnpm-lock.yaml` incluido no se presenta como snapshot transitivo validado. Consultá `VERIFICACION.md` antes de ejecutar una instalación congelada; en un entorno con red debe regenerarse una vez con el pnpm fijado y después verificarse con `--frozen-lockfile`.

## Desarrollo

El proyecto fija Node.js `24.19.0` en `.node-version` y en `engines`, y pnpm `11.24.0` en `packageManager` y `engines`.

```bash
corepack enable
corepack prepare pnpm@11.24.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Despliegue en Cloudflare Workers

Para un sitio Astro completamente estático no se necesita un adaptador SSR. Wrangler publica el contenido de `dist/` como Workers Assets.

```bash
pnpm deploy
```

Antes de desplegar, definir `SITE_URL` con el dominio definitivo y volver a construir para que canonical, Open Graph, JSON-LD y sitemap compartan la misma fuente de URL.

## Privacidad

- Google Analytics 4 permanece desactivado hasta que la persona habilita la categoría analítica en `/cookies/`.
- Google Maps se presenta mediante carga bajo acción explícita o preferencia funcional previa.
- No existe publicidad personalizada.
- No se usan ventanas emergentes para privacidad, términos o cookies.

## Fotografías

Las fotografías documentales remotas proceden de Wikimedia Commons y se muestran con referencia a su fuente/licencia. Logo, favicon y recursos de identidad son locales.

## Fuentes editoriales

- Turismo de la Municipalidad de Córdoba
- Municipalidad de Córdoba y áreas de Cultura/Movilidad
- Agencia Córdoba Turismo
- Argentina.gob.ar / Secretaría de Turismo, Ambiente y Deportes
- Wikimedia Commons para material fotográfico con licencia identificable

Los datos operativos que pueden cambiar —transporte, tarifas, horarios de edificios y estacionamiento— se describen sin congelar cifras innecesarias y deben verificarse en fuentes oficiales antes del viaje.
