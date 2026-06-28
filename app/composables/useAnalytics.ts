// Stub de analítica (PRD §9): por ahora solo registra en consola.
// TODO: enviar a Google Analytics / GTM cuando exista una cuenta real configurada.
export function useAnalytics() {
  function trackEvent(eventName: string, detail: Record<string, unknown> = {}) {
    console.info('[analytics]', eventName, detail)
  }

  return { trackEvent }
}
