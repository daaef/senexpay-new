<script setup lang="ts"></script>

<template>
  <Navbar />
  <main class="font-sf relative min-h-screen">
    <slot/>
    <section class="min-h-[80vh] py-[60px] font-sf bg-background">
      <div
          class="container py-10 rounded-[23px] bg-gradient-to-b from-[#AB9CEF]/5 to-background grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
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