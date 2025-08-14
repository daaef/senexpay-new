export const usePreloader = () => {
  const isLoading = ref(true)
  const isTransitioning = ref(false)
  const isInitialLoad = ref(true)

  const startLoading = () => {
    isLoading.value = true
    isTransitioning.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
    setTimeout(() => {
      isTransitioning.value = false
    }, 500) // Match transition duration
  }

  const simulateLoading = (duration = 1500) => {
    startLoading()
    setTimeout(() => {
      stopLoading()
    }, duration)
  }

  const handleInitialLoad = () => {
    if (isInitialLoad.value) {
      isInitialLoad.value = false
      // Ensure minimum display time for mobile devices
      setTimeout(() => {
        stopLoading()
      }, 2500) // Increased to 2.5 seconds for better mobile experience
    }
  }

  return {
    isLoading: readonly(isLoading),
    isTransitioning: readonly(isTransitioning),
    isInitialLoad: readonly(isInitialLoad),
    startLoading,
    stopLoading,
    simulateLoading,
    handleInitialLoad
  }
}
