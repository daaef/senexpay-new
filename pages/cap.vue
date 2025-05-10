<template>
  <!-- Hero Section -->
  <section class="pb-[60px] pt-[120px] bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background relative">
    <div class="container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] py-20">
        <div class="w-full p-8 lg:p-20 text-white flex items-center justify-start">
          <div>
            <h5 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Supercharge your career</h5>
            <p class="text-lg md:text-xl">
              Sign up for our Campus Ambassadors Program (CAP) to join
              Africa's leading blockchain company pioneering the digital
              financial revolution in Africa as a student representative on
              your campus.
            </p>
          </div>
        </div>
        <div class="bg-white rounded-3xl p-3 h-[calc(100vh-240px)] lg:h-auto">
          <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSepzro27fVOHBu6cbtmF-rGdxrr-_c886db9Wl3ertAtN7Dsg/viewform?embedded=true"
              class="w-full h-full rounded-xl"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="py-20 bg-background">
    <div class="container">
      <div class="text-center">
        <h3 class="text-3xl font-semibold mb-8">About the program</h3>
        <div class="max-w-6xl mx-auto">
          <p class="text-lg mb-4">
            Campus Ambassadors Program (CAP) provides a unique opportunity to
            students in Nigerian tertiary institutions to join Africa's
            leading blockchain company pioneering the digital financial
            revolution in Africa as a student representative on their campus.
          </p>
          <p class="text-lg">
            The goal of this program is to equip students in Nigerian tertiary
            institutions with financial education and professional skills to
            stand out in the global marketplace especially in the blockchain
            industry.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="py-20 bg-gradient-to-b from-background to-[hsl(var(--page-background))]/70">
    <div class="container">
      <div class="p-1 border border-gray-200 rounded-3xl dark:border-gray-800">
        <div class="p-12 text-center">
          <h3 class="text-3xl font-semibold tracking-tight">The Benefits</h3>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
            The Campus Ambassadors Program (CAP) will provide the following
            benefits to students:
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 p-1 overflow-hidden bg-gray-100 rounded-2xl dark:bg-gray-800/50">
          <div
              class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Professional Development
              </h2>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                We'll provide a corporate platform that equips students with
                highly valuable on demand skills that gives them outstanding
                leverage in the job market and opportunities to internship
                opportunities.
              </p>
            </div>
          </div>
          <div
              class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Networking Opportunity
              </h2>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                We'll also provide a platform to help students network and
                build highly valuable professional relationships with their
                peers across other campuses.
              </p>
            </div>
          </div>
          <div
              class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Affiliate Earnings
              </h2>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                As an Ambassador with SenexPay, you're entitled to earning
                commissions from new users who you refer and sign up to trade
                on SenexPay. There are no limitations on the amount you can
                earn. The more people who create accounts and trade on
                SenexPay after clicking your referral link, the more payouts
                you'll receive.
              </p>
            </div>
          </div>
          <div
              class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Exclusive Branded Merchs
              </h2>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                As a CAP beneficiary, you become the face of our brand on your
                campus. You also get our exclusive branded merchandises and
                gifts as soon as they're ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQs Section -->
  <section class="py-20 bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background">
    <div class="container">
      <div class="text-center mb-12">
        <h3 class="text-3xl font-semibold mb-4">Find more Answers</h3>
      </div>

      <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-10 bg-background">
          <div>
            <div
                v-for="(faq, index) in faqs"
                :key="faq.id"
                class="py-4 px-6 flex items-center justify-between gap-5 cursor-pointer hover:bg-[hsl(var(--page-background))] transition-all ease-in-out duration-300 mb-2"
                :class="activeIndex === index ? 'bg-gradient-to-r from-[hsl(var(--page-background))] to-background font-bold' : 'bg-gradient-to-r from-[hsl(var(--page-background))]/50 to-background'"
                @click="()=> {activeAnswer = faq.answer; activeIndex = index}"
            >
              {{ faq.question }}
              <svg
xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </div>
          <div v-if="activeAnswer" class="p-4">
            <div class="prose-sm dark:prose-invert max-w-none" v-html="activeAnswer"/>
          </div>
          <div v-else class="p-4 text-gray-500 dark:text-gray-400 flex items-center justify-center">
            Select a question to view the answer
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="text-lg">
          Can't find it here? Check our
          <NuxtLink to="/contact" class="text-primary hover:underline">Help Centre</NuxtLink>
          .
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

const colorMode = useColorMode();

const faqs = ref([
  {
    id: 1,
    number: 1,
    question: 'What does a SenexPay Campus Ambassador do?',
    answer: 'The SenexPay campus ambassador represents and promotes SenexPay on campus and constantly seeks to identify new and innovative ways to maximise SenexPay\'s reach on their campus',
  },
  {
    id: 2,
    number: 2,
    question: 'Is the program for selected courses?',
    answer: 'No. Our application is open to students across all disciplines.',
  },
  {
    id: 3,
    number: 3,
    question: 'What is the next step after the application?',
    answer: 'Shortlisted candidates will be notified on the next steps.',
  },
  {
    id: 4,
    number: 4,
    question: 'What do I get as a SenexPay Campus Ambassador?',
    answer: `<ul class="list-disc pl-5"><li>Professional Development</li><li>Networking Opportunity</li><li>Affiliate Earnings</li><li>Exclusive Branded Merchs</li></ul>`,
  }
]);

const activeAnswer = ref(faqs.value[0].answer);
const activeIndex = ref(0);

onMounted(() => {
  colorMode.preference = 'dark';
  // Set the first FAQ answer as active by default
  if (faqs.value.length > 0) {
    activeAnswer.value = faqs.value[0].answer;
    activeIndex.value = 0;
  }
});

// SEO metadata
useHead({
  title: 'Campus Ambassadors Program | SenexPay',
  meta: [
    {
      name: 'description',
      content: "Sign up for our Campus Ambassadors Program (CAP) to join Africa's leading blockchain company pioneering the digital financial revolution in Africa as a student representative on your campus."
    },
    {
      property: 'og:url',
      content: 'https://www.senexpay.com/cap'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.senexpay.com/cap'
    }
  ]
});
</script>
