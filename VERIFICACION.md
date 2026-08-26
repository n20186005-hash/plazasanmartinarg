# Estado de verificación

## Comprobaciones realizadas en este entorno

- Estructura Astro + Tailwind CSS + TypeScript revisada.
- Versiones de dependencias fijadas sin rangos flotantes en `package.json`.
- Node.js fijado en `.node-version` y `engines`.
- pnpm fijado en `packageManager` y `engines`.
- No existe `pnpm-workspace.yaml`.
- Revisión estática de cadenas no permitidas, residuos de otros proyectos y mezcla de alfabetos: superada.
- Parámetros del mapa adaptados a español / Argentina.
- Páginas de privacidad, términos y cookies: rutas independientes.
- GA4: carga condicionada al consentimiento analítico.
- Sitemap: integración condicional; solo se activa cuando `SITE_URL` tiene un dominio real.

## Limitación del entorno de construcción

El contenedor de trabajo no dispone de resolución DNS / salida de red hacia el registro de npm. La ejecución exacta de:

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
```

se detuvo al intentar descargar pnpm desde el registro, con `getaddrinfo EAI_AGAIN`. El runtime disponible en el contenedor es Node.js 22.16.0, mientras que el proyecto fija Node.js 24.19.0.

Por ese motivo no es técnicamente posible afirmar que `pnpm check` y `pnpm build` hayan sido ejecutados en este contenedor. El `pnpm-lock.yaml` incluido refleja el importador y las versiones directas fijadas, pero **no debe considerarse un lockfile de dependencias transitivas validado** hasta regenerarlo en un entorno con red usando el pnpm fijado por el proyecto.

## Procedimiento obligatorio en un entorno con red

1. Usar Node.js `24.19.0`.
2. Activar Corepack.
3. Ejecutar `corepack prepare pnpm@11.24.0 --activate`.
4. Regenerar una vez el lockfile con `pnpm install --lockfile-only` y conservar el resultado completo.
5. Borrar `node_modules`.
6. Ejecutar `CI=1 corepack pnpm install --frozen-lockfile`.
7. Ejecutar `pnpm check`.
8. Ejecutar `pnpm build`.
9. Ejecutar `pnpm qa`.
10. Si `SITE_URL` está configurado, revisar `dist/sitemap-*.xml` y comprobar que todas las URL pertenezcan al dominio configurado y que no se haya incorporado `lastmod` editorial inventado.

Esta nota evita presentar como aprobado un paso que el entorno no permitió ejecutar.
