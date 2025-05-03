<script setup lang="ts">
import {ref} from "vue";
import Navbar from "~/components/Navbar.vue";
import type {Avatar} from "#ui/types";

const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
const div3Ref = ref(null);
const div4Ref = ref(null);
const div5Ref = ref(null);
const div6Ref = ref(null);
const div7Ref = ref(null);
</script>

<template>
  <Navbar/>
  <ClientOnly>
    <header class="font-sf relative min-h-screen w-full overflow-hidden rounded-lg bg-background">
      <FlickeringGrid
          class="absolute top-0 left-0 opacity-70 inset-0 z-0 w-full h-full"
          :square-size="7"
          :grid-gap="6"
          color="#60A5FA"
          :max-opacity="0.5"
          :flicker-chance="0.1"
      />
      <div
          class="h-full absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background">
      </div>
      <div class="container grid lg:grid-cols-2 gap-10 pt-[200px] items-center relative z-10">
        <div class="space-y-4">
          <div class="py-1 px-4 gradient-border bg-[rgba(41,58,83,.9)] rounded-[25px] text-lg text-white inline-block">
            Embrace the Future with SenexPay
          </div>
          <h3 class="text-6xl text-foreground font-bold">One wallet, endless
            possibilities.</h3>
          <p class="text-4xl text-foreground font-light">Effortlessly trade, store, and secure crypto assets in one
            app.</p>
          <div class="inline-grid grid-cols-3 gap-5">
            <NuxtImg src="/qr.svg" alt="Qr code" class="h-10"/>
            <NuxtImg src="/apple.svg" alt="Apple store Badge" class="h-10"/>
            <NuxtImg src="/playstore.svg" alt="Google Play Badge" class="h-10"/>
          </div>
        </div>
        <div
            ref="containerRef"
            class="relative flex h-[600px] justify-center w-full"
        >
          <div
              class="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10"
          >
            <div class="flex flex-row items-center justify-between">
              <div
                  ref="div1Ref"
                  class="z-10 flex size-12 items-center justify-center rounded-full shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-foreground"
              >
                <img src="/btc.svg" alt="Bitcoin icon" class="size-[38px]">
              </div>
              <div
                  ref="div5Ref"
                  class="z-10 flex size-12 items-center justify-center rounded-full text-foreground shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <img src="/usdt.svg" alt="Tether icon" class="size-[38px]">
              </div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div
                  ref="div2Ref"
                  class="z-10 flex size-12 items-center justify-center rounded-full shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-foreground"
              >
                <img src="/trx.svg" alt="Tron icon" class="size-[38px]">
              </div>
              <div
                  ref="div4Ref"
                  class="z-10 flex h-[400px] w-[200px]]"
              >
                <NuxtImg
                    class="h-[400px] w-[200px] object-contain"
                    src="/open-menu.png"
                    alt="hero"
                    loading="lazy"
                />
              </div>
              <div
                  ref="div6Ref"
                  class="z-10 flex size-12 items-center justify-center rounded-full text-foreground shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <img src="/ltc.svg" alt="Litecoin icon" class="size-[38px]">
              </div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div
                  ref="div3Ref"
                  class="z-10 flex size-12 items-center justify-center rounded-full text-foreground shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-foreground"
              >
                <img src="/xlm.svg" alt="Stellar icon" class="size-[38px]">
              </div>
              <div
                  ref="div7Ref"
                  class="z-10 flex size-12 items-center justify-center rounded-full text-foreground shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <img src="/bnb.svg" alt="Binance coin icon" class="size-[38px]">
              </div>
            </div>
          </div>

          <AnimatedBeam
              :container-ref="containerRef"
              :from-ref="div1Ref"
              :to-ref="div4Ref"
              :curvature="-75"
              :end-y-offset="-10"
          />
          <AnimatedBeam
              :container-ref="containerRef"
              :from-ref="div2Ref"
              :to-ref="div4Ref"
          />
          <AnimatedBeam
              :container-ref="containerRef"
              :from-ref="div3Ref"
              :to-ref="div4Ref"
              :curvature="75"
              :end-y-offset="10"
          />
          <AnimatedBeam
              :container-ref="containerRef"
              :from-ref="div5Ref"
              :to-ref="div4Ref"
              :curvature="-75"
              :end-y-offset="-10"
          />
          <AnimatedBeam
              :container-ref="containerRef"
              :from-ref="div6Ref"
              :to-ref="div4Ref"
          />
          <AnimatedBeam
              :container-ref="containerRef"
              :from-ref="div7Ref"
              :to-ref="div4Ref"
              :curvature="75"
              :end-y-offset="10"
          />
        </div>
      </div>
    </header>
  </ClientOnly>
  <main class="font-sf">
    <slot/>
    <section class="min-h-[80vh] py-[60px] font-sf bg-background">
      <div
          class="container py-10 rounded-[23px] bg-gradient-to-b from-[#AB9CEF]/5 to-[#2F3351]/5 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <div class="">
          <h3 class="text-6xl font-bold">Get the SenexPay mobile now!</h3>
          <p class="mb-5 font-light text-xl mt-4">Get smarter and faster access right on your mobile phone.</p>
          <div class="inline-grid grid-cols-3 gap-5">
            <NuxtImg src="/qr.svg" alt="Qr code" class="h-10"/>
            <NuxtImg src="/apple.svg" alt="Apple store Badge" class="h-10"/>
            <NuxtImg src="/playstore.svg" alt="Google Play Badge" class="h-10"/>
          </div>
        </div>
        <div class="flex relative items-center min-h-[600px] gap-6">
          <Ripple circle-class="border-foreground h-[400px] rounded-full"/>
          <NuxtImg src="/phone-img.png" class="relative h-[450px]" alt="Phone Image"/>
        </div>
      </div>
    </section>
  </main>
  <SenexFooter/>
</template>

<style scoped></style>