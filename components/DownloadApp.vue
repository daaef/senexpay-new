<script setup lang="ts">

</script>

<template>
  <section class="min-h-[80vh] py-[60px] font-sf bg-background overflow-x-hidden w-full">
    <div
        class="container py-10 rounded-[23px] bg-gradient-to-b from-[#AB9CEF]/5 to-[#2F3351]/5 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
      <div class="">
        <h3 class="md:text-6xl text-5xl font-bold">Get the SenexPay mobile now!</h3>
        <p class="mb-5 font-light text-xl mt-4">Get smarter and faster access right on your mobile phone.</p>
        <div class="inline-grid grid-cols-3 gap-5">
          <NuxtLink to="https://apps.apple.com/us/app/senexpay-trade-bitcoin-usdt/id1627864145" target="_blank">
            <img src="/apple.svg" alt="Apple store Badge" class="h-10"/>
          </NuxtLink>
          <NuxtLink to="https://play.google.com/store/apps/details?id=com.senexpay.mobile&hl=en&gl=NG" target="_blank">
            <img src="/playstore.svg" alt="Google Play Badge" class="h-10"/>
          </NuxtLink>
        </div>
      </div>
      <div class="flex relative items-center min-h-[600px] gap-6">
        <Ripple circle-class="border-foreground h-[400px] rounded-full"/>
        <img src="/phone-img.png" class="relative h-[450px] w-auto object-contain" alt="Phone Image"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>