<script setup lang="ts">
import {ref} from "vue";
import Navbar from "~/components/Navbar.vue";
import type {Avatar} from "#ui/types";
const qrCodeVisible = ref(false);
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
            <div class="relative">
              <img
                  src="/qr.svg"
                  alt="Qr code"
                  class="h-10 cursor-pointer transition-transform hover:scale-110"
                  @mouseenter="qrCodeVisible = true"
                  @mouseleave="qrCodeVisible = false"
              />
              <Transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
              >
                <div
                    v-if="qrCodeVisible"
                    class="absolute z-20 top-0 -left-4 -translate-y-full mb-2 p-4 bg-card rounded-lg shadow-lg border border-border"
                >
                  <div class="flex flex-col items-center">
                    <qr-code />
                    <p class="mt-2 text-sm text-muted-foreground">Scan to download SenexPay</p>
                  </div>
                  <div class="absolute -bottom-2 left-6 w-4 h-4 bg-card rotate-45 border-r border-b border-border"></div>
                </div>
              </Transition>
            </div>
            <NuxtLink to="https://apps.apple.com/us/app/senexpay-trade-bitcoin-usdt/id1627864145" target="_blank">
              <img src="/apple.svg" alt="Apple store Badge" class="h-10"/>
            </NuxtLink>
            <NuxtLink to="https://play.google.com/store/apps/details?id=com.senexpay.mobile&hl=en&gl=NG" target="_blank">
              <img src="/playstore.svg" alt="Google Play Badge" class="h-10"/>
            </NuxtLink>
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
                <img
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
  <main class="font-sf overflow-x-hidden">
    <slot/>
    <DownloadApp/>
  </main>
  <SenexFooter/>
</template>

<style scoped></style>