<template>
  <div class="random-shape-container">
    <div
        v-for="item in items"
        :key="item.id"
        class="group relative -mr-4 item-wrapper group"
        @mouseenter="(e) => handleMouseEnter(e, item.id)"
        @mouseleave="hoveredIndex = null"
        @mousemove="handleMouseMove"
    >
      <!-- Tooltip -->
      <Motion
          v-if="hoveredIndex === item.id"
          :initial="{
        opacity: 0,
        y: 20,
        scale: 0.6,
      }"
          :animate="{
        opacity: 1,
        y: 0,
        scale: 1,
      }"
          :transition="{
        type: 'spring',
        stiffness: 260,
        damping: 10,
      }"
          :exit="{
        opacity: 0,
        y: 20,
        scale: 0.6,
      }"
          :style="{
        translate: `${translation}px`,
        rotate: `${rotation}deg`,
      }"
          class="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-xs shadow-xl"
      >
        <div
            class="absolute inset-x-10 -bottom-px z-30 h-px w-1/5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        />
        <div
            class="absolute -bottom-px left-10 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
        />
        <div class="relative z-30 text-base font-bold text-white">
          {{ item.name }}
        </div>
        <div class="text-xs text-white">{{ item.designation }}</div>
      </Motion>

      <!-- Avatar Image -->
      <img
          :src="item.image"
          :alt="item.name"
          class="relative !m-0 size-14 rounded-full border-2 border-accent/30 object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {Motion} from "motion-v";

interface Item {
  id: number;
  name: string;
  designation: string;
  image: string;
}

defineProps<{
  items: Item[];
}>();

const hoveredIndex = ref<number | null>(null);
const mouseX = ref<number>(0);

// Calculate rotation and translation based on mouse position
const rotation = computed<number>(() => {
  const x = mouseX.value;
  return (x / 100) * 50;
});

const translation = computed<number>(() => {
  const x = mouseX.value;
  return (x / 100) * 50;
});

// Handle initial mouse position and hover
function handleMouseEnter(event: MouseEvent, itemId: number) {
  hoveredIndex.value = itemId;
  // Calculate initial position immediately
  const rect = (event.target as HTMLElement)?.getBoundingClientRect();
  const halfWidth = rect.width / 2;
  mouseX.value = event.clientX - rect.left - halfWidth;
}

// Handle mouse movement
function handleMouseMove(event: MouseEvent) {
  const rect = (event.target as HTMLElement)?.getBoundingClientRect();
  const halfWidth = rect.width / 2;
  mouseX.value = event.clientX - rect.left - halfWidth;
}
</script>
<style scoped>
.random-shape-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
}

.item-wrapper {
  grid-column: span 1;
  grid-row: span 1;
  place-self: center;
}

.item-wrapper:nth-child(2n) {
  transform: translateY(15px) translateX(10px);
}

.item-wrapper:nth-child(3n) {
  grid-column: span 2;
  transform: translateY(-20px);
}

.item-wrapper:nth-child(4n) {
  grid-row: span 2;
  transform: translateX(25px);
}

.item-wrapper:nth-child(5n) {
  transform: translateY(30px) translateX(-15px);
}

.item-wrapper:nth-child(6n) {
  grid-column: span 2;
  transform: translateX(-20px);
}

.item-wrapper:nth-child(7n) {
  transform: translateY(-25px) translateX(20px);
}

.item-wrapper:nth-child(8n) {
  grid-row: span 2;
  transform: translateY(15px);
}

.item-wrapper:nth-child(9n) {
  transform: translateX(30px) translateY(-10px);
}

.item-wrapper:nth-child(10n) {
  grid-column: span 2;
  transform: translateY(20px) translateX(-25px);
}
@media screen and (max-width: 1280px) {
  .random-shape-container {
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;
    min-height: 450px;
  }
}

@media screen and (max-width: 1024px) {
  .random-shape-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .random-shape-container {
    grid-template-columns: repeat(3, 1fr);
    min-height: 400px;
  }
}

@media screen and (max-width: 640px) {
  .random-shape-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 1rem;
    min-height: 350px;
  }
}

@media screen and (max-width: 480px) {
  .random-shape-container {
    grid-template-columns: repeat(3, 1fr);
    min-height: 300px;
  }

  .item-wrapper {
    transform: none !important;
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
}
</style>