<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-[url('/capBg.png')] bg-cover bg-center opacity-5"></div>
    <FlickeringGrid
        class="absolute inset-0 opacity-30"
        :square-size="4"
        :grid-gap="6"
        color="#864FFF"
        :max-opacity="0.3"
        :flicker-chance="0.1"
    />
    
    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-2000"></div>

    <div class="container relative z-10 pt-32 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Icon name="heroicons:academic-cap" class="w-5 h-5 text-primary" />
            <span class="text-sm font-medium text-primary">Campus Ambassadors Program</span>
          </div>
          
          <div class="space-y-6">
            <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              Supercharge your career
            </h1>
            <p class="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Sign up for our Campus Ambassadors Program (CAP) to join
              Africa's leading blockchain company pioneering the digital
              financial revolution in Africa as a student representative on
              your campus.
            </p>
          </div>

          <!-- Stats Cards -->
          <!-- <div class="grid grid-cols-3 gap-4 lg:gap-6">
            <div class="bg-card/50 backdrop-blur-sm border rounded-xl p-4 text-center">
              <div class="text-2xl font-bold text-primary">100+</div>
              <div class="text-sm text-muted-foreground">Universities</div>
            </div>
            <div class="bg-card/50 backdrop-blur-sm border rounded-xl p-4 text-center">
              <div class="text-2xl font-bold text-secondary">500+</div>
              <div class="text-sm text-muted-foreground">Ambassadors</div>
            </div>
            <div class="bg-card/50 backdrop-blur-sm border rounded-xl p-4 text-center">
              <div class="text-2xl font-bold text-accent">₦2M+</div>
              <div class="text-sm text-muted-foreground">Earned</div>
            </div>
          </div> -->
        </div>

        <!-- Form Section -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
          <div class="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:document-text" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">Apply Now</h3>
                <p class="text-sm text-muted-foreground">Join the revolution</p>
              </div>
            </div>
            
            <div class="h-[600px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSepzro27fVOHBu6cbtmF-rGdxrr-_c886db9Wl3ertAtN7Dsg/viewform?embedded=true"
                  class="w-full h-full border-0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="py-24 relative">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
          <Icon name="heroicons:information-circle" class="w-5 h-5 text-secondary" />
          <span class="text-sm font-medium text-secondary">About the Program</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold">Building Africa's Future Leaders</h2>
        
        <div class="space-y-6 text-lg text-muted-foreground">
          <p class="leading-relaxed">
            Campus Ambassadors Program (CAP) provides a unique opportunity to
            students in Nigerian tertiary institutions to join Africa's
            leading blockchain company pioneering the digital financial
            revolution in Africa as a student representative on their campus.
          </p>
          <p class="leading-relaxed">
            The goal of this program is to equip students in Nigerian tertiary
            institutions with financial education and professional skills to
            stand out in the global marketplace especially in the blockchain
            industry.
          </p>
        </div>

        <!-- Vision Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Icon name="heroicons:light-bulb" class="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Innovation</h3>
            <p class="text-muted-foreground">Pioneering the future of digital finance</p>
          </div>
          <div class="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Icon name="heroicons:users" class="w-12 h-12 text-secondary mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Community</h3>
            <p class="text-muted-foreground">Building networks across universities</p>
          </div>
          <div class="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Icon name="heroicons:chart-bar-square" class="w-12 h-12 text-accent mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Growth</h3>
            <p class="text-muted-foreground">Accelerating career development</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="py-24 bg-gradient-to-b from-background to-primary/5">
    <div class="container">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Icon name="heroicons:gift" class="w-5 h-5 text-primary" />
          <span class="text-sm font-medium text-primary">Program Benefits</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">What You'll Gain</h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          The Campus Ambassadors Program (CAP) will provide comprehensive benefits
          to help you excel in your career journey.
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="bg-card/50 backdrop-blur-sm border rounded-3xl p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Professional Development -->
            <div class="group relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div class="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="heroicons:academic-cap" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-2xl font-bold mb-4 pr-16">Professional Development</h3>
              <p class="text-muted-foreground leading-relaxed">
                We'll provide a corporate platform that equips students with
                highly valuable on-demand skills that gives them outstanding
                leverage in the job market and opportunities for internship positions.
              </p>
              <div class="mt-6 flex items-center gap-2 text-primary font-medium">
                <span>Learn more</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <!-- Networking Opportunity -->
            <div class="group relative bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-secondary/10">
              <div class="absolute top-4 right-4 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="heroicons:user-group" class="w-6 h-6 text-secondary" />
              </div>
              <h3 class="text-2xl font-bold mb-4 pr-16">Networking Opportunity</h3>
              <p class="text-muted-foreground leading-relaxed">
                We'll also provide a platform to help students network and
                build highly valuable professional relationships with their
                peers across other campuses.
              </p>
              <div class="mt-6 flex items-center gap-2 text-secondary font-medium">
                <span>Connect now</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <!-- Affiliate Earnings -->
            <div class="group relative bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-500/10">
              <div class="absolute top-4 right-4 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="heroicons:banknotes" class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-2xl font-bold mb-4 pr-16">Affiliate Earnings</h3>
              <p class="text-muted-foreground leading-relaxed">
                As an Ambassador with SenexPay, you're entitled to earning
                commissions from new users who you refer and sign up to trade
                on SenexPay. There are no limitations on the amount you can earn.
              </p>
              <div class="mt-6 flex items-center gap-2 text-green-600 font-medium">
                <span>Start earning</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <!-- Exclusive Branded Merch -->
            <div class="group relative bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-500/10">
              <div class="absolute top-4 right-4 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="heroicons:gift" class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-2xl font-bold mb-4 pr-16">Exclusive Branded Merch</h3>
              <p class="text-muted-foreground leading-relaxed">
                As a CAP beneficiary, you become the face of our brand on your
                campus. You also get our exclusive branded merchandise and
                gifts as soon as they're ready.
              </p>
              <div class="mt-6 flex items-center gap-2 text-purple-600 font-medium">
                <span>Get exclusive items</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-24 relative">
    <div class="container">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <Icon name="heroicons:rocket-launch" class="w-5 h-5 text-accent" />
          <span class="text-sm font-medium text-accent">Application Process</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">How to Join CAP</h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Follow these simple steps to become a SenexPay Campus Ambassador
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <div class="flex items-start gap-6 group">
            <div class="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              1
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2">Fill Application Form</h3>
              <p class="text-muted-foreground">Complete the embedded form with your personal and academic information.</p>
            </div>
          </div>

          <div class="flex items-start gap-6 group">
            <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              2
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2">Review & Selection</h3>
              <p class="text-muted-foreground">Our team reviews applications and selects qualified candidates.</p>
            </div>
          </div>

          <div class="flex items-start gap-6 group">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              3
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2">Onboarding & Training</h3>
              <p class="text-muted-foreground">Selected ambassadors receive comprehensive training and resources.</p>
            </div>
          </div>

          <div class="flex items-start gap-6 group">
            <div class="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              4
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2">Start Your Journey</h3>
              <p class="text-muted-foreground">Begin representing SenexPay on your campus and start earning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQs Section -->
  <section class="py-24 bg-gradient-to-b from-primary/5 to-background">
    <div class="container">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Icon name="heroicons:question-mark-circle" class="w-5 h-5 text-primary" />
          <span class="text-sm font-medium text-primary">Frequently Asked Questions</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Find More Answers</h2>
        <p class="text-xl text-muted-foreground">Get answers to common questions about our Campus Ambassadors Program</p>
      </div>

      <div class="max-w-4xl mx-auto mb-12">
        <FaqCollection :items="faqs" />
      </div>

      <div class="text-center">
        <div class="bg-card border rounded-2xl p-8 max-w-2xl mx-auto">
          <Icon name="heroicons:chat-bubble-left-right" class="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Still have questions?</h3>
          <p class="text-muted-foreground mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <NuxtLink 
            to="/contact" 
            class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Visit Help Centre
            <Icon name="heroicons:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

// SEO Configuration
const { setPageSEO, setJSONLD, getFAQSchema } = useSEO()

const colorMode = useColorMode();
const config = useRuntimeConfig();

// Default/fallback FAQ data
const defaultFaqs = [
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
];

const faqs = ref(defaultFaqs);

const fetchCapFaqs = async () => {
  try {
    const response = await $fetch(`${config.public.apiUrl}/faqs/?category=cap`);
    if (response && Array.isArray(response)) {
      faqs.value = response;
    } else {
      console.warn('Invalid CAP FAQ data received, using fallback data');
    }
  } catch (error) {
    console.error('Failed to fetch CAP FAQs:', error);
    // faqs.value already contains default data
  }
};

const activeAnswer = ref(faqs.value[0].answer);
const activeIndex = ref(0);

// Set comprehensive SEO
setPageSEO({
  title: 'Campus Ambassadors Program (CAP) | Join SenexPay Team',
  description: "Sign up for our Campus Ambassadors Program (CAP) to join Africa's leading blockchain company pioneering the digital financial revolution in Africa as a student representative on your campus.",
  keywords: 'campus ambassador program, student ambassador, blockchain student program, cryptocurrency campus program, senexpay cap, student opportunities, university ambassador, fintech student program, africa blockchain program',
  ogTitle: 'Campus Ambassadors Program (CAP) | Join SenexPay Team',
  ogDescription: "Join Africa's leading blockchain company as a student representative on your campus.",
  ogUrl: 'https://senexpay.com/cap',
  canonical: 'https://senexpay.com/cap',
  type: 'website'
})

// Create FAQ schema from CAP FAQ data
const capFaqSchema = computed(() => {
  const faqItems = faqs.value.map(faq => ({
    question: faq.question,
    answer: faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for schema
  }))
  return getFAQSchema(faqItems)
})

// Set JSON-LD with CAP-specific data
setJSONLD([
  {
    '@type': 'WebPage',
    '@id': 'https://senexpay.com/cap/#webpage',
    isPartOf: { '@id': 'https://senexpay.com/#website' },
    url: 'https://senexpay.com/cap/',
    inLanguage: 'en-US',
    name: 'Campus Ambassadors Program (CAP) | Join SenexPay Team',
    about: {
      '@id': 'https://senexpay.com/#organization'
    },
    dateModified: new Date().toISOString(),
    description: "Sign up for our Campus Ambassadors Program (CAP) to join Africa's leading blockchain company.",
    potentialAction: {
      '@type': 'ApplyAction',
      target: 'https://senexpay.com/cap/'
    }
  },
  {
    '@type': 'EducationalOccupationalProgram',
    '@id': 'https://senexpay.com/cap/#program',
    name: 'SenexPay Campus Ambassadors Program',
    description: "A student ambassador program that allows university students to represent SenexPay on their campus and gain experience in blockchain and fintech industry.",
    provider: { '@id': 'https://senexpay.com/#organization' },
    educationalCredentialAwarded: 'Ambassador Certificate',
    occupationalCategory: [
      'Marketing',
      'Blockchain Technology',
      'Financial Technology'
    ],
    applicationDeadline: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 year from now
    programType: 'Part-time',
    timeToComplete: 'P1Y', // 1 year
    offers: {
      '@type': 'Offer',
      category: 'Educational Program',
      eligibilityRequirement: 'Current university student in Africa',
      benefits: [
        'Professional Development',
        'Networking Opportunities',
        'Affiliate Earnings',
        'Exclusive Branded Merchandise'
      ]
    }
  },
  capFaqSchema.value
])

onMounted(() => {
  colorMode.preference = 'dark';
  
  // Fetch CAP FAQs from API
  fetchCapFaqs();
  
  // Set the first FAQ answer as active by default
  if (faqs.value.length > 0) {
    activeAnswer.value = faqs.value[0].answer;
    activeIndex.value = 0;
  }
});
</script>
