<template>
  <div
      :class="
      cn(
        'relative mx-auto min-h-fit w-full max-w-[300px] min-w-[280px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )
    "
  >
    <div class="flex flex-row items-center gap-3">
      <div
          class="flex size-10 items-center justify-center rounded-2xl"
          :style="`background-color: ${color}`"
      >
        <img :src="`/${icon}.svg`" :alt="name">
      </div>
      <div class="flex flex-col overflow-hidden">
        <div class="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
          <span class="text-sm sm:text-lg">{{ name }}</span>
          <span class="mx-1">·</span>
          <span class="text-xs" :class="mode.toLocaleLowerCase() === 'buy' ? 'text-[#26a17b]' : 'text-[#ef0027]'">{{ mode }}</span>
        </div>
        <p class="text-sm font-normal dark:text-white/60">{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

type NotificationProps = {
  name: string;
  price: string;
  mode: string;
  icon: string;
  color: string;
};

withDefaults(defineProps<NotificationProps>(), {
  name: "",
  price: "",
  mode: "",
  icon: "",
  color: "",
});
</script>