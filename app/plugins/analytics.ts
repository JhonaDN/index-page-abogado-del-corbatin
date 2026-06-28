// Directiva v-analytics="'cta_hero'": registra un clic igual que el listener
// delegado de data-analytics en el sitio estático original.
export default defineNuxtPlugin((nuxtApp) => {
  const { trackEvent } = useAnalytics()

  nuxtApp.vueApp.directive('analytics', {
    mounted(el: HTMLElement, binding) {
      el.addEventListener('click', () => {
        trackEvent(binding.value, { href: el.getAttribute('href') || null })
      })
    }
  })
})
