<template>
  <footer class="bg-background border-t border-accent/10">
    <div class="container">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="py-20 pt-16 lg:border-r border-accent/10">
          <Logo src="/logo.svg" alt="Senexpay Logo" class="!h-9 !w-auto !text-foreground"/>
        </div>
        <div class="grid lg:grid-cols-3 gap-8 lg:col-span-2 lg:mt-0">
          <div class="py-20 pt-16 lg:border-r border-accent/10">
            <h3 class="text-sm/6 font-semibold text-white">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.company" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="py-20 pt-16 lg:border-r border-accent/10">
            <h3 class="text-sm/6 font-semibold text-white">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.support" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="py-20 pt-16">
            <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.legal" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-accent/10">
      <div class="py-8 container md:flex md:items-center md:justify-between">
        <div class="flex gap-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href"
             class="text-foreground hover:text-foreground/80">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="size-6" aria-hidden="true"/>
          </a>
        </div>
        <p class="mt-8 text-sm/6 text-foreground md:order-1 md:mt-0">SenexPay © 2025. All rights
          reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {defineComponent, h} from 'vue'
import Logo from "assets/icons/logo.svg";

const navigation = {
  support: [
    {name: 'FAQs', href: '/faq'},
    {name: 'Contact Us', href: '/contact'},
  ],
  company: [
    {name: 'About', href: '/about'},
    {name: 'Blog', href: 'https://blog.senexpay.com'},
    {name: 'Career', href: '/careers'},
  ],
  legal: [
    {name: 'Terms of service', href: '/terms'},
    {name: 'Privacy policy', href: '/privacy'},
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://web.facebook.com/senexpay/',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/senexpay/',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'X',
      href: 'https://twitter.com/senexpay/',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
              h('path', {
                d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
              }),
            ]),
      }),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/senexpay/',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 30 30'}, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M27.8568 0H2.13942C1.569 0.00334381 1.02325 0.233019 0.622092 0.638554C0.220933 1.04409 -0.00280783 1.5923 3.7352e-05 2.16272V27.8353C-0.00162768 28.1179 0.0523889 28.3981 0.159003 28.6598C0.265617 28.9216 0.42274 29.1597 0.621401 29.3608C0.820062 29.5618 1.05637 29.7217 1.31683 29.8314C1.5773 29.941 1.85681 29.9983 2.13942 30H27.8607C28.4306 29.9951 28.9754 29.765 29.3763 29.3598C29.7771 28.9546 30.0013 28.4072 30 27.8373V2.16272C30.0013 1.5921 29.7766 1.04419 29.3749 0.638881C28.9732 0.23357 28.4274 0.00385583 27.8568 0ZM9.06714 25.7144H4.62013V11.3971H9.07394V25.7144H9.06714ZM6.84412 9.44149C6.33425 9.44149 5.83583 9.2903 5.41189 9.00703C4.98794 8.72376 4.65752 8.32113 4.4624 7.85007C4.26728 7.37901 4.21623 6.86067 4.3157 6.3606C4.41517 5.86052 4.6607 5.40118 5.02123 5.04064C5.38176 4.68011 5.84111 4.43458 6.34119 4.33511C6.84126 4.23564 7.3596 4.28669 7.83066 4.48181C8.30172 4.67693 8.70434 5.00735 8.98761 5.4313C9.27088 5.85524 9.42208 6.35366 9.42208 6.86353C9.42182 7.54717 9.15013 8.20273 8.66673 8.68614C8.18332 9.16954 7.52776 9.44123 6.84412 9.44149ZM25.7339 25.7144H21.2879V18.7498C21.2879 17.0888 21.2548 14.9572 18.9773 14.9572C16.66 14.9572 16.3051 16.765 16.3051 18.6331V25.7183H11.8639V11.3971H16.129V13.3527H16.1893C16.6173 12.6231 17.2348 12.0231 17.9764 11.6163C18.7179 11.2095 19.5558 11.0111 20.401 11.0421C24.9005 11.0421 25.7378 14.0091 25.7378 17.8658L25.7339 25.7144Z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@senexpayhq',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
  ],
}
</script>