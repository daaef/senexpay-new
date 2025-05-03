<template>
    <section class="min-h-[80vh] py-[60px] bg-background">
      <div
          class="container py-10 rounded-[23px] bg-gradient-to-b from-[#AB9CEF]/5 to-[#2F3351]/5 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div class="flex items-center gap-6">
          <ClientOnly>
            <div class="relative flex h-[600px] flex-col overflow-hidden p-2">
              <AnimatedList>
                <template #default>
                  <Notification
                      v-for="(item, idx) in notifications"
                      :key="idx"
                      :name="item.name"
                      :description="item.description"
                      :icon="item.icon"
                      :color="item.color"
                      :time="item.time"
                  />
                </template>
              </AnimatedList>
            </div>
          </ClientOnly>
          <iPhone15ProMockup
              class="h-[600px] max-w-fit"
          >
            <div class="bg-white h-full py-10 px-6 flex-col flex justify-between">
              <div class="">
                <h4 class="text-[#053889] text-lg font-bold mb-6">
                  Trade
                </h4>
                <div class="grid grid-cols-2 h-[55px] relative bg-[#D6E6FD] rounded-[9px]">
                  <div
                      class="bg-[#053889] absolute w-[calc(50%_-4px)] top-[4px] left-[4px] h-[calc(100%_-_8px)] rounded-[9px]"></div>
                  <button class="relative appearance-none text-white">Buy</button>
                  <button class="relative appearance-none text-[#053889]">Sell</button>
                </div>
                <form class="mt-8 text-[#053889] grid gap-y-4">
                  <div class="relative z-20">
                    <label for="btc_amount">{{ selected.label }} Amount</label>
                    <div class="relative mt-2">
                      <input id="btc_amount"
                             class="h-[50px] pl-4 border ring-1 border-[#053889] w-full p-2 rounded-[9px] appearance-none"
                             type="number" placeholder="0.00"/>
                      <USelectMenu class="absolute right-[6px] text-[#053889] top-[50%] translate-y-[-50%]"
                                   v-model="selected"
                                   :ui="{ base: 'bg-transparent', ring: '!ring-0', shadow: 'shadow-none'}" color="white"
                                   variant="none" :options="coins">
                        <template #leading>
                          <UAvatar v-bind="(selected.avatar as Avatar)" size="2xs"/>
                        </template>
                      </USelectMenu>
                    </div>
                  </div>
                  <div class="relative z-10">
                    <label for="btc_amount">{{ selectedCountry.label }} Amount</label>
                    <div class="relative mt-2">
                      <input id="btc_amount"
                             class="h-[50px] pl-4 border ring-1 border-[#053889] w-full p-2 rounded-[9px] appearance-none"
                             type="number" placeholder="0.00"/>
                      <USelectMenu class="absolute right-[6px] text-[#053889] top-[50%] translate-y-[-50%]"
                                   v-model="selectedCountry"
                                   :ui="{ base: 'bg-transparent', ring: '!ring-0', shadow: 'shadow-none'}" color="white"
                                   variant="none" :options="countries">
                        <template #leading>
                          <UAvatar v-bind="(selectedCountry.avatar as Avatar)" size="2xs"/>
                        </template>
                      </USelectMenu>
                    </div>
                  </div>
                  <div class="relative z-2">
                    <label for="btc_amount">USD Amount</label>
                    <div class="relative mt-2">
                      <input id="btc_amount"
                             class="h-[50px] pl-4 border ring-1 border-[#053889] w-full p-2 rounded-[9px] appearance-none"
                             type="number" placeholder="0.00"/>
                      <div
                          class="absolute right-[20px] flex gap-1 items-center text-[#053889] top-[50%] translate-y-[-50%]">
                        <img class="size-6 rounded-full overflow-hidden" alt="USD" src="/us.svg"/>
                        <p>USD</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <nuxt-link to="/" class="py-4 px-6 text-center bg-[#053889] rounded-[9px] text-white h-[60px]">Continue
                buying
              </nuxt-link>
            </div>
          </iPhone15ProMockup>
        </div>
        <div class="">
          <h3 class="text-5xl font-semibold">Empowering Every Corner of the Globe</h3>
          <p class="mb-5 font-light text-lg">From Lagos to London, We’re Redefining Financial Inclusion</p>
          <p class="text-2xl">SenexPay bridges borders-access crypto in your local currency, send value globally in
            seconds, and reclaim financial freedom, no matter where you are.</p>
        </div>
      </div>
    </section>
    <section
        class="min-h-[80vh] py-[60px] bg-gradient-to-b from-background to-[hsl(var(--page-background))]/0">
      <div class="container grid lg:grid-cols-2 gap-10 items-center">
        <div class="">
          <h3 class="text-5xl mb-6 font-semibold">We are serious about security!</h3>
          <p class="text-2xl">
            Trade in your pajamas knowing we’ve got 24/7 crypto babysitters, encryption blankets, and a strict "Don’t
            Touch My Stuff" policy. Security shouldn’t feel like homework
          </p>
          <div class="flex items-center mt-8">
            <nuxt-link href="/"
                       class="text-2xl font-medium bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text">
              Get Started
            </nuxt-link>
            <Icon name="line-md:chevron-right" class="text-custom-blue" size="24"/>
          </div>
        </div>
        <div>
          <NuxtImg src="/security.png" alt="Security"/>
        </div>
      </div>
    </section>
    <section class="min-h-[80vh] py-[60px] bg-gradient-to-b from-[hsl(var(--page-background))]/0 to-background">
      <div class="container">
        <div
            class="px-4 py-6 bg-gradient-to-b from-[hsl(var(--page-background))]/0 to-background rounded-[23px] grid lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <NuxtImg src="/senex-plus.png" alt="SenexPlus Image"/>
          </div>
          <div class="relative flex items-center">
            <NuxtImg class="absolute top-[20px] h-8 right-[20px]" src="/senex+.png" alt="SenexPlus Logo"/>
            <div>
              <h3 class="text-5xl mb-6 font-semibold">Enjoy VIP banking with SenexPlus</h3>
              <p class="text-2xl">
                Discover a more private way to settle your global remittances, FX, stocks and investment transactions
                delivered securely and exclusively anywhere at anytime.
              </p>
              <div class="flex items-center mt-8">
                <nuxt-link href="/"
                           class="text-2xl font-medium bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text">
                  Get Started
                </nuxt-link>
                <Icon name="line-md:chevron-right" class="text-custom-blue" size="24"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <article class="min-h-[80vh]">
      <section class=" py-[60px] bg-background">
        <div class="container flex-col flex items-center">
          <h3 class="text-5xl font-bold text-center max-w-[420px] mb-4">
            Simple dashboard,
            powerful features
          </h3>
          <p class="text-lg text-center mb-20">Get a full bird's-eye view of all your crypto activities on the
            dashboard.
          </p>
          <NuxtImg src="/dashboard.png" alt="Dashboard Image"/>
        </div>
      </section>
      <section class="relative py-[60px] bg-center bg-contain bg-no-repeat"
               style="background-image: url('/why-senex.svg'), linear-gradient(to bottom, hsl(var(--background)) 0%, rgba(134,79,255,0.2) 30%, hsl(var(--background)) 100%);">
        <div class="container relative">
          <h3 class="mx-auto mb-2 text-balance text-center text-6xl font-bold tracking-tight">
            Why people love SenexPay
          </h3>
          <p class="text-center text-xl">We just wanna make crypto exchange stress-free.</p>
          <div class="mt-10 grid gap-[30px] sm:mt-16 lg:grid-cols-[1.7fr_2.3fr] xl:px-[100px]">
            <div class="relative">
              <div
                  class="relative border-[10px] border-[#123061] flex h-full flex-col items-start justify-center overflow-hidden bg-gradient-to-b from-background to-[hsl(var(--page-background))] rounded-[23px] p-10 py-16">
                <img class="h-22 mb-16" src="/simple_to_use.svg" alt="Simple to use image">
                <div class="">
                  <h3 class="text-4xl mb-12 font-semibold">Simple to use</h3>
                  <p class="text-3xl">If you can read ‘A-Z’, then you can use SenexPay for your crypto exchange. Easy
                    stuff.</p>
                </div>
              </div>
            </div>
            <div class="grid gap-[30px]">
              <div class="relative">
                <div
                    class="relative border-[10px] border-[#123061] overflow-hidden bg-gradient-to-b from-background to-[hsl(var(--page-background))] rounded-[23px]  p-10 py-16">
                  <div class="flex items-start gap-16">
                    <img class="h-22 mb-16" src="/swif_transactions.svg" alt="Swift Transactions">
                    <div class="">
                      <h3 class="text-4xl mb-12 font-semibold">Swift transactions</h3>
                      <p class="text-3xl">We know how much you hate to wait. Enjoy the power of instant payment on
                        SenexPay.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div
                    class="relative border-[10px] border-[#123061] flex h-full flex-col overflow-hidden bg-gradient-to-b from-background to-[hsl(var(--page-background))] rounded-[23px] p-10 py-16">
                  <div class="flex items-start gap-16">
                    <img class="h-22 mb-16" src="/support.svg" alt="Award-winning Support">
                    <div class="">
                      <h3 class="text-4xl mb-12 font-semibold">Award-winning Support</h3>
                      <p class="text-3xl">We’re ready and waiting 24/7 to answer your questions and solve your
                        problems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
    <section class="min-h-[80vh] py-[60px] bg-background">
      <div class="container grid lg:grid-cols-2 gap-20 items-center">
        <div class="">
          <h4 class="text-2xl inline-block font-medium bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text mb-4">
            Virtual Event
          </h4>
          <h3 class="text-5xl mb-6 font-semibold">Getting Into Crypto?</h3>
          <p class="text-2xl">
            Do you need guidance on how to start investing and earning in cryptocurrency? Worry no more! Join other
            crypto newbies in the weekly session with our Crypto experts.
          </p>
        </div>
        <div
            class="p-10 bg-background border-[10px] text-2xl border-[#123061] rounded-[23px] items-center flex flex-col gap-10">
          <h3 class="w-full text-4xl">Talk to a <span class="font-[800]">Crypto Advisor</span></h3>
          <NuxtImg src="/crypto-advisor.png" alt="Crypto Advisor"/>
          <div class="w-full">
            <p class="text-md">Every Thursday 8:00-9:00 PM</p>
            <p class="text-md">Get expert answers to all your crypto questions.</p>
          </div>
          <div class="w-full">
            <nuxt-link href="/"
                       class="text-2xl font-medium bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text">
              Register for free
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-[80vh] py-[60px] bg-gradient-to-b from-background to-[hsl(var(--page-background))]/0">
      <div class="container grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <NuxtImg src="/capBg.png" alt="Campus Ambassador image"/>
        </div>
        <div class="">
          <h3 class="text-5xl mb-6 font-semibold">Supercharge your career!</h3>
          <p class="text-2xl">
            Sign up for our Campus Ambassadors Program (CAP) to join Africa's leading blockchain company pioneering the
            digital financial revolution in Africa as a student representative on your campus.
          </p>
          <div class="flex items-center mt-8">
            <nuxt-link href="/"
                       class="text-2xl font-medium bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text">
              Apply here
            </nuxt-link>
            <Icon name="line-md:chevron-right" class="text-custom-blue" size="24"/>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-[60vh] py-[60px] bg-gradient-to-b from-[hsl(var(--page-background))]/0 to-background">
      <div class="container grid lg:grid-cols-2 gap-20 items-center">
        <div class="">
          <h4 class="text-2xl inline-block font-medium bg-gradient-to-r from-custom-purple to-custom-blue text-transparent bg-clip-text mb-4">
            Referral
          </h4>
          <h3 class="text-5xl mb-6 font-semibold">Cash out Fast!</h3>
          <p class="text-2xl">
            Earn up to 5 USD each time you invite a friend to register and perform a transaction on SenexPay. There is
            no limit to what you can earn!
          </p>
        </div>
        <div class="earn--group">
          <input id="toggle_Referral" hidden type="checkbox" />
          <div class="">
            <label for="toggle_Referral">
              <NuxtImg src="/referral.png" alt="Referral Image"/>
            </label>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-[50vh] py-[60px] bg-background">
      <div class="container px-12">
        <h3 class="mx-auto mb-16 text-balance text-center text-5xl font-bold tracking-tight">
          What customers say about us
        </h3>
        <TestimonialSlider :testimonials="testimonies" />
      </div>
    </section>
    <section class="min-h-[50vh] py-[60px] bg-background">
      <div class="container px-12">
        <h3 class="mx-auto mb-16 text-balance text-center text-5xl font-bold tracking-tight">
          We are In The News
        </h3>
          <!-- First Marquee -->
          <Marquee
              pause-on-hover
              class="[--duration:20s]"
          >
            <ReviewCard
                v-for="review in firstRow"
                :key="review.username"
                :img="review.img"
                :name="review.name"
                :username="review.username"
                :body="review.body"
            />
          </Marquee>
          <!-- Left Gradient -->
          <div
              class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
          ></div>

          <!-- Right Gradient -->
          <div
              class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
          ></div>
        </div>
    </section>
</template>
<script setup lang="ts">

import type {Avatar} from "#ui/types";

definePageMeta({
  layout: 'home'
})

interface Testimonial {
  photo: string;
  reviewText: string;
  name: string;
}

const colorMode = useColorMode();
const testimonials: Testimonial[] = [
  {
    photo: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    reviewText:
        "Inspira UI is sleeker than my star cruiser. Launch-ready in seconds. Zero crashes, zero gravity.",
    name: "Buzz Lightyear",
  },
  {
    photo: `https://randomuser.me/api/portraits/women/${getRandomNumber()}.jpg`,
    reviewText:
        "Clickin' around this thing feels like ridin' a horse with turbo boosters. Inspira’s got giddyup!",
    name: "Jessie",
  },
  {
    photo: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    reviewText:
        "I’ve seen some clunky UIs in my day... but this one? Smoother than a tumbleweed on Tuesday.",
    name: "Woody",
  },
  {
    photo: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    reviewText:
        "I was terrified. Then I clicked. Nothing exploded. Inspira UI is a safe space. I’m thriving.",
    name: "Rex",
  },
];
const testimonies = ref<Testimonial[]>(testimonials)
onMounted(async () => {
  colorMode.preference = 'dark';

  await useFetch(`${config.public.api_url}/testimonials/`).then((res) => {
    console.log('res.data is', res.data.value)
    testimonies.value = res.data.value
  })
})

const coins = [{
  id: 'btc',
  label: 'BTC',
  avatar: {src: '/btc.svg'}
}, {
  id: 'usdt',
  label: 'Tether',
  avatar: {src: '/usdt.svg'}
}, {
  id: 'tron',
  label: 'Tron',
  avatar: {src: '/trx.svg'}
}]

const countries = [{
  id: 'naira',
  label: 'Naira',
  avatar: {src: '/ng.svg'}
}, {
  id: 'rand',
  label: 'Rand',
  avatar: {src: '/za.svg'}
}]
const selected = ref(coins[0])
const selectedCountry = ref(countries[0])
const notifications = [
  {
    name: "Bitcoin (BTC)",
    description: "Inspira UI",
    time: "Buy",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Tether (USDT)",
    description: "Inspira UI",
    time: "Sell",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Tron (TRX)",
    description: "Inspira UI",
    time: "Buy",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Bitcoin (BTC)",
    description: "Inspira UI",
    time: "Sell",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Tether (USDT)",
    description: "Inspira UI",
    time: "Buy",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Tron (TRX)",
    description: "Inspira UI",
    time: "Sell",
    icon: "💬",
    color: "#FF3D71",
  },
];

import { rand } from "@vueuse/core";
import type {Testimonial} from "~/components/TestimonialSlider.vue";

const config = useRuntimeConfig()
console.log('config', config.public.api_url)

function getRandomNumber() {
  return rand(1, 99);
}

const reviews = [
  {
    body: "SenexPay launches First Crypto Wallet built by an African Company",
    img: "/vanguard.svg",
  },
  {
    body: "Senex enters Nigeria’s market, eyes $8bn global Web3 market",
    img: "/business-day.png",
  },
  {
    body: "SenexPay launches First Crypto Wallet built by an African Company",
    img: "/guardian.png",
  },
  {
    body: "SenexPay To Bring Easy Trading & Digital Currency Storage To Africans",
    img: "/nairametrics.png",
  },
];

// Split reviews into two rows
const firstRow = ref(reviews);
</script>

<style scoped>
input[type="number"] {
  background: #fafafa;
  appearance: none;
  -moz-appearance: textfield;
}

@media (max-width: 1024px) {
 #toggle_Referral:checked ~ .earn--group:before {
    content: '';
    height: 50%;
    transform: scale(1);
    width: 70%;
    background: #A26DFF;
    border-top-right-radius: 50px;
    position: absolute;
    right: 33px;
    top: -7px;
    display: block;
  }

 #toggle_Referral:checked ~ .earn--group:after {
    content: '';
    height: 50%;
    width: 70%;
    background: #4085F2;
    border-bottom-left-radius: 50px;
    position: absolute;
    left: -7px;
    bottom: -7px;
    display: block;
  }
}

@media (max-width: 1023px) {
 #toggle_Referral:checked ~ .earn--group:before {
    right: -7px;
    border-top-right-radius: 65px;
  }

 #toggle_Referral:checked ~ .earn--group:after {
    right: -7px;
    border-bottom-left-radius: 65px;
  }
}

@media (max-width: 767px) {
 #toggle_Referral:checked ~ .earn--group:before {
    border-top-right-radius: 40px;
  }

 #toggle_Referral:checked ~ .earn--group:after {
    border-bottom-left-radius: 40px;
  }
}

@media (max-width: 435px) {
 #toggle_Referral:checked ~ .earn--group:before {
    border-top-right-radius: 30px;
  }

 #toggle_Referral:checked ~ .earn--group:after {
    border-bottom-left-radius: 30px;
  }
}

.earn--group {
  display: block;
  padding-right: 0;
  position: relative;
  max-width: 550px;
}

@media (max-width: 767px) {
 .earn--group {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 435px) {
 .earn--group {
    margin: 0 auto;
  }

 .earn--group:before {
    transition: 0.3s ease-in-out;
    content: '';
    height: 50%;
    width: 70%;
    background: #A26DFF;
    border-top-right-radius: 35px;
    position: absolute;
    right: -7px;
    top: -7px;
    display: block;
  }

 .earn--group:after {
    transition: 0.3s ease-in-out;
    content: '';
    height: 50%;
    width: 70%;
    background: #4085F2;
    border-bottom-left-radius: 30px;
    position: absolute;
    left: -7px;
    bottom: -7px;
    display: block;
  }
}

.earn--group:before,
.earn--group:after {
  content: '';
  transition: 0.3s ease-in-out;
  height: 50%;
  width: 70%;
  position: absolute;
}

.earn--group:before {
  right: 0;
  top: 0;
  border-top-right-radius: 50px;
  background: #A26DFF;
}

@media (max-width: 1023px) {
 .earn--group:before {
    right: 0;
  }
}

.earn--group:after {
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 50px;
  background:  #4085F2; /* Added background color as it was missing in the original */
}

.earn--group:hover:before {
  content: '';
  height: 50%;
  transform: scale(1);
  width: 70%;
  background: #A26DFF;
  border-top-right-radius: 50px;
  position: absolute;
  right: -7px;
  top: -7px;
  display: block;
}

@media (max-width: 1023px) {
 .earn--group:hover:before {
    right: -7px;
    border-top-right-radius: 65px;
  }
}

@media (max-width: 767px) {
 .earn--group:hover:before {
    border-top-right-radius: 40px;
    top: 0;
    right: 0;
  }
}

@media (max-width: 435px) {
 .earn--group:hover:before {
    border-top-right-radius: 30px;
  }
}

.earn--group:hover:after {
  content: '';
  height: 50%;
  width: 70%;
  background: #4085F2;
  border-bottom-left-radius: 50px;
  position: absolute;
  left: -7px;
  bottom: -7px;
  display: block;
}

@media (max-width: 1023px) {
  .earn--group:hover:after {
    left: -7px;
    border-bottom-left-radius: 65px;
  }
}

@media (max-width: 767px) {
  .earn--group:hover:after {
    border-bottom-left-radius: 40px;
    bottom: 0;
    left: 0;
  }
}

@media (max-width: 435px) {
  .earn--group:hover:after {
    border-bottom-left-radius: 30px;
  }
}

.earn--group img {
  position: relative;
  width: 100%;
  z-index: 2;
}

</style>