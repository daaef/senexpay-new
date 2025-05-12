<template>
  <figure
      class="relative w-[400px] border-[10px] border-[#4085F2]/30 flex flex-col justify-between overflow-hidden rounded-xl  bg-gray-950/[.01] p-6 hover:bg-gray-950/[.05] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  >
    <div>
      <div class="flex flex-row items-center gap-2">
        <img
            :src="img"
            class="h-[40px]"
            alt=""
        />
      </div>
      <blockquote class="mt-4 text-2xl">{{ body }}</blockquote>
    </div>
    <div class="flex items-center mt-4">
      <nuxt-link :href="link" target="_blank"
                 class="text-lg bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text">
        Read more
      </nuxt-link>
      <Icon name="line-md:chevron-right" class="text-custom-blue" size="24"/>
    </div>
  </figure>
</template>

<script lang="ts" setup>
interface Props {
  img: string;
  body: string;
  link: string;
}

defineProps<Props>();
</script>