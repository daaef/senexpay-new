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
import demoFaqs from "@/data/faqs";
import type { Faq } from "@/types/Faq";

// SEO Configuration
const { setPageSEO, setJSONLD, getFAQSchema } = useSEO()

const colorMode = useColorMode();
const config = useRuntimeConfig();

// Use the composable for FAQ data with API integration
const faqsComposable = useFaqs()
const faqs = faqsComposable.data
const loading = faqsComposable.loading
const error = faqsComposable.error
const activeAnswer = ref(null);
const selectedTab = ref(0);
const searchQuery = ref('');

// Initialize FAQ data
await faqsComposable.initialize();

// Set SEO after we have FAQ data
setPageSEO({
  title: 'Frequently Asked Questions - SenexPay Help Center',
  description: 'Find answers to common questions about SenexPay cryptocurrency exchange, security, KYC verification, rewards, referrals, and trading. Get help with your account and transactions.',
  keywords: 'senexpay faq, frequently asked questions, help center, crypto exchange help, bitcoin trading questions, usdt support, security questions, kyc verification, referral program',
  ogTitle: 'Frequently Asked Questions - SenexPay Help Center',
  ogDescription: 'Find answers to common questions about SenexPay cryptocurrency exchange, security, and trading.',
  ogUrl: 'https://senexpay.com/faq',
  canonical: 'https://senexpay.com/faq',
  type: 'website'
})

// Create FAQ schema from the actual FAQ data
const faqSchemaData = computed(() => {
  const faqItems = faqs.value.slice(0, 10).map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))
  return getFAQSchema(faqItems)
})

// Set JSON-LD with actual FAQ data
setJSONLD([
  faqSchemaData.value,
  {
    '@type': 'WebPage',
    '@id': 'https://senexpay.com/faq/#webpage',
    isPartOf: { '@id': 'https://senexpay.com/#website' },
    url: 'https://senexpay.com/faq/',
    inLanguage: 'en-US',
    name: 'Frequently Asked Questions - SenexPay Help Center',
    about: {
      '@id': 'https://senexpay.com/#organization'
    },
    dateModified: new Date().toISOString(),
    description: 'Find answers to common questions about SenexPay cryptocurrency exchange, security, and trading.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://senexpay.com/faq?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])


watch(selectedTab, () => {
  activeAnswer.value = null;
});

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
  })) as any[];
});

onMounted(async () => {
  colorMode.preference = 'dark';
})
</script>

<style>
.faq-answer ul {
  list-style: disc;
  padding-left: 15px;
}
</style>