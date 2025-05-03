<template>
  <section
      class="relative isolate pb-[60px] pt-[120px] bg-gradient-to-b from-[hsl(var(--page-background))]/0 to-background">
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
    <div class="container relative z-20 grid grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
            <svg
                class="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,transparent,transparent)]"
                aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1"
                         patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white"/>
              <svg x="100%" y="-1" class="overflow-visible">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0"/>
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
            </svg>
          </div>
          <h2 class="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">Get in touch</h2>
          <p class="mt-6 text-lg/8 ">Get in touch with the right people at SenexPay, we’re here to help. </p>
          <div class="mt-10 space-y-4 text-base/7 ">
            <a href="https://www.google.com/maps/place/NumberOne+Lagos+(IMB+Building)/@6.4229469,3.421408,17z/data=!3m1!4b1!4m5!3m4!1s0x103bf543d59b3b85:0xca3bd3363638d8da!8m2!3d6.4229416!4d3.4235967"
               target="_blank" class="flex gap-x-4 hover:opacity-70">
              <h3 class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true"/>
              </h3>
              <p>Number One Lagos,<br/>
                1, Akin Adesola Street, Victoria Island.</p>
            </a>
            <a href="https://wa.me/+2349162598206" class="flex gap-x-4 hover:opacity-70">
              <h3 class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true"/>
              </h3>
              <p>+234 916 *** 8206</p>
            </a>
            <a href="mailto:hello@senexpay.com" class="flex gap-x-4 hover:opacity-70">
              <h3 class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true"/>
              </h3>
              <p>hello@senexpay.com</p>
            </a>
          </div>
        </div>
      </div>
      <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm/6 font-semibold ">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                       class="block w-full rounded-md  px-3.5 py-2 text-base  outline outline-1 -outline-offset-1   focus:outline focus:outline-2 focus:-outline-offset-2 "/>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm/6 font-semibold ">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                       class="block w-full rounded-md  px-3.5 py-2 text-base  outline outline-1 -outline-offset-1   focus:outline focus:outline-2 focus:-outline-offset-2 "/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-semibold ">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email"
                       class="block w-full rounded-md  px-3.5 py-2 text-base  outline outline-1 -outline-offset-1   focus:outline focus:outline-2 focus:-outline-offset-2 "/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm/6 font-semibold ">Phone number</label>
              <div class="mt-2.5">
                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                       class="block w-full rounded-md  px-3.5 py-2 text-base  outline outline-1 -outline-offset-1   focus:outline focus:outline-2 focus:-outline-offset-2 "/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm/6 font-semibold ">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4"
                          class="block w-full rounded-md  px-3.5 py-2 text-base  outline outline-1 -outline-offset-1   focus:outline focus:outline-2 focus:-outline-offset-2 "/>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit"
                    class="rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold bg-background text-foreground shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from '@heroicons/vue/24/outline'

const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'dark';
})
</script>