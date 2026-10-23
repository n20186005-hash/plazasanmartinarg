# Plaza San Martín Córdoba

Guía cultural independiente en español de Argentina, con páginas de historia, ubicación, clima y condiciones de uso.

## Desarrollo y comprobación

Astro genera páginas estáticas en `dist/`. El Worker de `src/worker.ts` sirve los recursos y `/api/weather`. Node 24 y pnpm son necesarios para las tareas del proyecto.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm qa
pnpm preview
```

El sitio canónico predeterminado es `https://plazasanmartinarg.com`; `SITE_URL` puede sustituirlo para una compilación autorizada. El sitemap se genera durante el build y excluye la página de error. La configuración de Wrangler usa el proyecto establecido `plazasanmartinarg`; no añade bindings de dominios.

Google Analytics conserva el control opcional de `/cookies/`. El mapa se carga bajo acción o preferencia previa. El pronóstico procede de Open-Meteo y muestra un estado de indisponibilidad cuando falla. Las fotografías conservan créditos y licencias por archivo en la página y en `LICENCIAS_FOTOS.md`.

Las comprobaciones locales no acreditan un despliegue ni sustituyen las revisiones visuales y funcionales en producción.
