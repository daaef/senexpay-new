<template>
  <section class="pb-[60px] pt-[200px] bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background">
    <div class="container">
      <h2 class="text-4xl font-semibold tracking-tight sm:text-5xl mb-10">Frequently Asked Questions.</h2>
      <UInput
          input-class="ring-none! focus:ring-0"
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="lg"
          color="white"
          :trailing="false"
          placeholder="Search for Questions of interest"
          class="w-full mb-10"
      />
      <UTabs :items="filteredFaqs" class="w-full" v-model="selectedTab">
        <template #item="{ item }">
          <FaqCollection :items="item.content" />
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
const searchQuery = ref('');

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

// Filter FAQs based on search query
const filteredFaqsList = computed(() => {
  if (!searchQuery.value.trim()) {
    return faqs.value;
  }

  const query = searchQuery.value.toLowerCase();
  return faqs.value.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
  );
});

// Group filtered FAQs by category
const filteredFaqs = computed(() => {
  return categoryTabs.value.map((tab) => ({
    label: tab.name,
    content: tab.ids === 0
        ? filteredFaqsList.value
        : filteredFaqsList.value.filter((faq) => faq.category === tab.ids),
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