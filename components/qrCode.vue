<template>
  <qrcode-vue
      :value="value"
      :level="level"
      :render-as="renderAs"
      :background="background"
      :foreground='foreground'
      :gradient="gradient"
      :gradient-type="gradientType"
      :gradient-start-color="gradientStartColor"
      :gradient-end-color="gradientEndColor"
      :image-settings='imageSettings'
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs, GradientType, ImageSettings } from 'qrcode.vue'

const value = ref('https://onelink.to/xd462s')
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')
const background = ref('hsl(var(--background))')
const foreground = ref('hsl(var(--foreground))')
const margin = ref(0)

const imageSettings = ref<ImageSettings>({
  src: '/favicon.ico',
  width: 30,
  height: 30,
  // x: 10,
  // y: 10,
  excavate: true,
})

const gradient = ref(false)
const gradientType = ref<GradientType>('linear')
const gradientStartColor = ref('#000000')
const gradientEndColor = ref('#38bdf8')
</script>