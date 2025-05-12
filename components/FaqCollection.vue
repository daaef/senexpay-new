<template>
      <dl class="mt-20 divide-y divide-foreground/10">
        <div v-for="faq in items" :key="faq.id" class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <dt class="text-base/7 font-semibold lg:col-span-5">{{ faq.question }}</dt>
          <dd class="mt-4 lg:col-span-7 lg:mt-0">
            <div class="text-base/7" v-html="faq.answer"/>
          </dd>
        </div>
      </dl>
</template>

<script setup lang="ts">
interface Props {
  items?: []
}

const props = withDefaults(defineProps<Props>(), {
  items: [
    {
      id: 1,
      number: 1,
      category: 3,
      question: "What's the best thing about Switzerland?",
      answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ],
});
</script>