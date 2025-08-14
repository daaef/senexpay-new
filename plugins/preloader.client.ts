export default defineNuxtPlugin(() => {
  const { startLoading, stopLoading, isInitialLoad } = usePreloader()

  // Handle route changes
  const router = useRouter()
  
  router.beforeEach((to, from, next) => {
    // Only start preloader if not initial load
    if (!isInitialLoad.value) {
      startLoading()
    }
    next()
  })

  router.afterEach((to, from) => {
    // Only stop preloader if not initial load
    if (!isInitialLoad.value) {
      setTimeout(() => {
        stopLoading()
      }, 800) // Minimum loading time for smooth UX
    }
  })
})
