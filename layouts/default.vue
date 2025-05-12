<script setup lang="ts">
import DownloadApp from "~/components/DownloadApp.vue";
</script>

<template>
  <Navbar />
  <main class="font-sf relative min-h-screen w-full overflow-x-hidden">
    <slot/>
    <DownloadApp />
  </main>
  <SenexFooter/>
</template>

<style scoped></style>