<template>
  <section class="pb-[60px] pt-[200px] bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background">
    <div class="container">
      <UTabs :items="groupedFaqs" class="w-full" v-model="selectedTab">
        <template #item="{ item }">
          <div class="grid grid-cols-[.7fr_1fr] gap-10 bg-background">
            <div class="">
              <div
                  class="py-4 px-6 flex items-center justify-between gap-5 cursor-pointer hover:bg-[hsl(var(--page-background))] transition-all ease-in-out duration-300 mb-2"
                  v-for="content in item.content" :key="content.id" @click="activeAnswer = content.answer"  :class="activeAnswer === content.answer ? 'bg-gradient-to-r from-[hsl(var(--page-background))] to-background font-bold' : 'bg-gradient-to-r from-[hsl(var(--page-background))]/50 to-background'">
                {{ content.question }}
                <Icon name="line-md:chevron-right" size="18"/>
              </div>
            </div>
            <div class="p-4 faq-answer" v-html="activeAnswer"></div>
          </div>
        </template>
      </UTabs>
    </div>
  </section>
</template>
<script setup lang="ts">
import demoFaqs from "~/data/faqs";
import type { Faq } from "~/types/Faq";
const colorMode = useColorMode();
const config = useRuntimeConfig();


const faqs = ref<Faq[]>(demoFaqs);
const activeAnswer = ref(null);
const selectedTab = ref(0);

watch(selectedTab, () => {
  activeAnswer.value = null;
});

const getFaqs = async () => {
  await useFetch(`${config.public.apiUrl}/faqs/`).then((res) => {
    console.log('res.data is', res.data.value);
    faqs.value = res.data.value as Faq[] ?? demoFaqs;
  });
};

const categoryTabs = ref([
  {
    name: "All",
    ids: 0,
    filter: "",
  },
  {
    name: "General",
    ids: 1,
    filter: "general",
  },
  {
    name: "Security / KYC",
    ids: 2,
    filter: "kyc",
  },
  {
    name: "Rewards / Referrals",
    ids: 3,
    filter: "rewards",
  },
  {
    name: "Exchange",
    ids: 5,
    filter: "exchange",
  },
])
const groupedFaqs = computed(() => {
  return categoryTabs.value.map((tab) => ({
    label: tab.name,
    content: tab.ids === 0
        ? faqs.value
        : faqs.value?.filter((faq) => faq.category === tab.ids),
  }));
});

onMounted(async () => {
  console.log('config', config.public.apiUrl)
  console.log('fetching faqs')
  await getFaqs()
  colorMode.preference = 'dark';
})
</script>

<style>
  .faq-answer ul {
    list-style: disc;
    padding-left: 15px;
  }
</style>
