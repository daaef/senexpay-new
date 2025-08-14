<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import Logo from "@/assets/icons/logo.svg"

const isVisible = ref(true)
const lastScrollPosition = ref(0)
const scrollThreshold = 50
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const navbarRef = ref(null)

const handleScroll = () => {
  const currentScrollPosition = window.scrollY

  // Determine if scrolling up or down
  if (currentScrollPosition < lastScrollPosition.value) {
    // Scrolling up - show navbar
    isVisible.value = true
  } else if (currentScrollPosition > lastScrollPosition.value && currentScrollPosition > scrollThreshold) {
    // Scrolling down and past threshold - hide navbar
    isVisible.value = false
  }

  // Get the total height of the navbar
  if (navbarRef.value) {
    const navbarHeight = navbarRef.value?.offsetHeight;
    // Check if scrolled past navbar height to apply background and blur
    isScrolled.value = currentScrollPosition > navbarHeight;
  }

  lastScrollPosition.value = currentScrollPosition
}

// Force isScrolled to true when mobile menu is opened
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // If we're opening the menu and not already scrolled, force the background
  if (mobileMenuOpen.value && !isScrolled.value) {
    isScrolled.value = true;
  } else if (!mobileMenuOpen.value && window.scrollY <= navbarRef.value?.offsetHeight) {
    // Reset isScrolled based on actual scroll position when closing menu
    isScrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <div
      :class="[
      'w-full top-0 transition-all md:pt-[20px] pt-0 duration-300 z-50 fixed flex justify-center',
      isVisible ? 'transform-none' : 'transform -translate-y-full'
    ]">
    <nav
        ref="navbarRef"
        :class="[
          'container md:rounded-[32px] rounded-none transition-all duration-300',
          isScrolled || mobileMenuOpen ? 'bg-background/40 backdrop-blur-lg' : 'bg-transparent backdrop-blur-none'
        ]"
    >
      <div class="mx-auto py-6">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="text-xl font-bold text-primary">
              <Logo src="/logo.svg" alt="Senexpay Logo" class="!h-6 !w-auto !text-foreground"/>
            </a>
          </div>

          <!-- Navigation Links - Desktop -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-foreground hover:text-accent transition-colors">Home</NuxtLink>
            <NuxtLink to="/about" class="text-foreground hover:text-accent transition-colors">About us</NuxtLink>
            <NuxtLink to="/faq" class="text-foreground hover:text-accent transition-colors">FAQ</NuxtLink>
            <NuxtLink to="/contact" class="text-foreground hover:text-accent transition-colors">Contact</NuxtLink>
          </div>

          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink to="/" class="text-foreground hover:text-accent transition-colors">Login</NuxtLink>
            <NuxtLink to="/"
                      class="bg-foreground text-background px-7 py-2 rounded-[25px] hover:bg-foreground/90 transition-colors">
              Get Started
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button
                @click="toggleMobileMenu"
                class="text-foreground hover:text-accent focus:outline-none"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4">
          <div class="flex flex-col space-y-4 py-2">
            <NuxtLink to="/" class="text-foreground hover:text-accent transition-colors">Home</NuxtLink>
            <NuxtLink to="/about" class="text-foreground hover:text-accent transition-colors">About us</NuxtLink>
            <NuxtLink to="/faq" class="text-foreground hover:text-accent transition-colors">FAQ</NuxtLink>
            <NuxtLink to="/contact" class="text-foreground hover:text-accent transition-colors">Contact</NuxtLink>
            <div class="flex flex-col space-y-2 pt-2 border-t border-gray-700">
              <NuxtLink to="/" class="text-foreground hover:text-accent transition-colors">Login</NuxtLink>
              <NuxtLink to="/"
                        class="bg-foreground text-background px-4 py-2 rounded-md hover:bg-foreground/90 transition-colors text-center">
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* Add any additional styling here */
</style>