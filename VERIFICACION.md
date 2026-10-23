# Verificación del proyecto

Ejecutar `pnpm check`, `pnpm build` y `pnpm qa` con las dependencias del lockfile. Revisar páginas, mapa, menú, clima y preferencias en navegador antes de publicar. Verificar después la revisión desplegada, los recursos que sirve, HTTPS, errores 404 y funcionamiento en escritorio y móvil.

La API meteorológica requiere red del servidor hacia Open-Meteo. El mapa y Google Analytics son servicios externos opcionales. No se publican diagnósticos privados de tráfico.
