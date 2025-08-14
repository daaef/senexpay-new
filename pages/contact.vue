<template>
  <section class="relative isolate pb-[60px] pt-[120px] bg-gradient-to-b from-[hsl(var(--page-background))]/0 to-background">
    <FlickeringGrid
        class="absolute top-0 left-0 opacity-70 inset-0 z-0 w-full h-full"
        :square-size="7"
        :grid-gap="6"
        color="#60A5FA"
        :max-opacity="0.5"
        :flicker-chance="0.1"
    />
    <div class="h-full absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background"></div>
    
    <div class="container relative z-20">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Contact Us</h1>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch with the right people at SenexPay, we're here to help.
        </p>
      </div>

      <!-- Contact Information Cards -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="space-y-0 border border-primary/20 rounded-lg overflow-hidden">
          <!-- Head Office -->
          <div class="contact-card group">
            <div class="flex items-start justify-between p-6 border-b border-primary/20 hover:bg-primary/5 transition-colors">
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Drop by our Head Office</h3>
                <p class="text-muted-foreground">
                  Number One Lagos,<br/>
                  1, Akin Adesola Street, Victoria Island.
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/place/NumberOne+Lagos+(IMB+Building)/@6.4229469,3.421408,17z/data=!3m1!4b1!4m5!3m4!1s0x103bf543d59b3b85:0xca3bd3363638d8da!8m2!3d6.4229416!4d3.4235967"
                target="_blank"
                rel="noopener"
                class="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                Find on Maps
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Email -->
          <div class="contact-card group">
            <div class="flex items-start justify-between p-6 border-b border-primary/20 hover:bg-primary/5 transition-colors">
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Send us an Email</h3>
                <p class="text-muted-foreground">hello@senexpay.com</p>
              </div>
              <a 
                href="mailto:hello@senexpay.com"
                target="_blank"
                rel="noopener"
                class="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                Send an Email
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- WhatsApp -->
          <div class="contact-card group">
            <div class="flex items-start justify-between p-6 hover:bg-primary/5 transition-colors">
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Chat us on WhatsApp</h3>
                <p class="text-muted-foreground">+234 916 *** 8206</p>
              </div>
              <a 
                href="https://wa.me/+2349162598206"
                target="_blank"
                rel="noopener"
                class="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                Chat now
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="text-center mb-20">
        <h3 class="text-2xl font-semibold mb-8">Get Social With Us</h3>
        <div class="flex justify-center items-center flex-wrap gap-0 max-w-2xl mx-auto">
          <!-- Facebook -->
          <a 
            href="https://web.facebook.com/senexpay/"
            target="_blank"
            rel="noopener"
            class="social-icon group facebook-hover"
          >
            <svg class="w-8 h-8 transition-colors" viewBox="0 0 122.877 122.877" fill="currentColor">
              <path d="M104.97,1.928H23.048A20.479,20.479,0,0,0,2.571,22.41v81.913A20.479,20.479,0,0,0,23.048,124.8H64.009V71.046H48.649V55.687h15.36V44.167a19.2,19.2,0,0,1,19.2-19.2h19.2v15.36h-19.2a3.84,3.84,0,0,0-3.84,3.84v11.52h21.119l-3.84,15.36H79.369V124.8h25.6a20.479,20.479,0,0,0,20.477-20.482V22.41A20.479,20.479,0,0,0,104.97,1.928Z" transform="translate(-2.571 -1.928)"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a 
            href="https://www.instagram.com/senexpay/"
            target="_blank"
            rel="noopener"
            class="social-icon group instagram-hover"
          >
            <svg class="w-8 h-8 transition-colors" viewBox="0 0 144.799 144.799" fill="currentColor">
              <path d="M72.4,0C52.731,0,50.275.09,42.553.434A53.386,53.386,0,0,0,24.978,3.8a35.454,35.454,0,0,0-12.827,8.35A35.325,35.325,0,0,0,3.8,24.978,53.23,53.23,0,0,0,.434,42.553C.072,50.275,0,52.731,0,72.4s.09,22.124.434,29.847A53.419,53.419,0,0,0,3.8,119.821a35.505,35.505,0,0,0,8.35,12.827A35.4,35.4,0,0,0,24.978,141a53.452,53.452,0,0,0,17.575,3.367c7.723.362,10.178.434,29.847.434s22.124-.09,29.847-.434A53.576,53.576,0,0,0,119.821,141,37,37,0,0,0,141,119.821a53.419,53.419,0,0,0,3.367-17.575c.362-7.723.434-10.178.434-29.847s-.09-22.124-.434-29.847A53.542,53.542,0,0,0,141,24.978a35.533,35.533,0,0,0-8.35-12.827A35.275,35.275,0,0,0,119.821,3.8,53.263,53.263,0,0,0,102.246.434C94.523.072,92.068,0,72.4,0Zm0,13.032c19.325,0,21.629.1,29.261.428,7.059.332,10.89,1.5,13.436,2.5A23.825,23.825,0,0,1,128.841,29.7c.989,2.546,2.172,6.377,2.492,13.436.344,7.638.422,9.931.422,29.261s-.09,21.629-.446,29.261c-.368,7.059-1.545,10.89-2.54,13.436a22.988,22.988,0,0,1-5.424,8.338,22.587,22.587,0,0,1-8.326,5.406c-2.534.989-6.425,2.172-13.484,2.492-7.686.344-9.949.422-29.316.422s-21.635-.09-29.316-.446c-7.065-.368-10.956-1.545-13.49-2.54a22.421,22.421,0,0,1-8.32-5.424,21.984,21.984,0,0,1-5.43-8.326c-1-2.534-2.166-6.425-2.534-13.484-.271-7.6-.368-9.949-.368-29.225s.1-21.635.368-29.328c.368-7.059,1.538-10.944,2.534-13.478a21.461,21.461,0,0,1,5.43-8.332,21.414,21.414,0,0,1,8.32-5.418c2.534-1,6.341-2.178,13.4-2.54,7.692-.271,9.955-.362,29.316-.362l.271.181Zm0,22.19A37.177,37.177,0,1,0,109.576,72.4,37.175,37.175,0,0,0,72.4,35.222Zm0,61.31A24.133,24.133,0,1,1,96.533,72.4,24.126,24.126,0,0,1,72.4,96.533Zm47.337-62.776a8.688,8.688,0,1,1-8.688-8.682A8.694,8.694,0,0,1,119.737,33.756Z"/>
            </svg>
          </a>

          <!-- Twitter -->
          <a 
            href="https://twitter.com/senexpay/"
            target="_blank"
            rel="noopener"
            class="social-icon group twitter-hover"
          >
            <svg class="w-8 h-8 transition-colors" viewBox="0 0 134.591 109.313" fill="currentColor">
              <path d="M120.756,30.623c.085,1.2.085,2.391.085,3.587,0,36.466-27.755,78.483-78.483,78.483A77.951,77.951,0,0,1,0,100.31a57.064,57.064,0,0,0,6.661.341A55.243,55.243,0,0,0,40.907,88.867a27.633,27.633,0,0,1-25.791-19.13,34.786,34.786,0,0,0,5.21.427,29.174,29.174,0,0,0,7.259-.939A27.588,27.588,0,0,1,5.465,42.153v-.341a27.78,27.78,0,0,0,12.468,3.5A27.625,27.625,0,0,1,9.394,8.419,78.407,78.407,0,0,0,66.27,37.285a31.14,31.14,0,0,1-.683-6.319,27.611,27.611,0,0,1,47.739-18.874A54.309,54.309,0,0,0,130.833,5.43a27.51,27.51,0,0,1-12.127,15.2,55.3,55.3,0,0,0,15.884-4.27,59.3,59.3,0,0,1-13.835,14.262Z" transform="translate(0 -3.381)"/>
            </svg>
          </a>

          <!-- YouTube -->
          <div class="social-icon group youtube-hover">
            <svg class="w-8 h-8 transition-colors" viewBox="0 0 149.665 105.233" fill="currentColor">
              <path d="M147.588,20.965A18.806,18.806,0,0,0,134.356,7.648C122.684,4.5,75.883,4.5,75.883,4.5s-46.8,0-58.473,3.148A18.806,18.806,0,0,0,4.177,20.965C1.05,32.713,1.05,57.223,1.05,57.223s0,24.51,3.127,36.258a18.525,18.525,0,0,0,13.232,13.105c11.672,3.148,58.473,3.148,58.473,3.148s46.8,0,58.473-3.148a18.525,18.525,0,0,0,13.232-13.105c3.127-11.747,3.127-36.258,3.127-36.258s0-24.51-3.127-36.258ZM60.576,79.476V34.97L99.693,57.224,60.576,79.476Z" transform="translate(-1.05 -4.5)"/>
            </svg>
          </div>

          <!-- LinkedIn -->
          <a 
            href="https://linkedin.com/company/senexpay/"
            target="_blank"
            rel="noopener"
            class="social-icon group linkedin-hover"
          >
            <svg class="w-8 h-8 transition-colors" viewBox="0 0 122.812 122.812" fill="currentColor">
              <path d="M114.039,2.25H8.745A8.81,8.81,0,0,0,0,11.1v105.1a8.81,8.81,0,0,0,8.745,8.854H114.039a8.833,8.833,0,0,0,8.772-8.854V11.1A8.833,8.833,0,0,0,114.039,2.25ZM37.118,107.517h-18.2V48.907h18.23v58.61ZM28.016,40.9A10.554,10.554,0,1,1,38.57,30.349,10.559,10.559,0,0,1,28.016,40.9Zm77.333,66.614h-18.2V79.007c0-6.8-.137-15.543-9.458-15.543-9.485,0-10.938,7.4-10.938,15.05v29h-18.2V48.907H66.011v8h.247c2.44-4.605,8.388-9.458,17.243-9.458,18.422,0,21.848,12.144,21.848,27.934Z" transform="translate(0 -2.25)"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div class="bg-card border rounded-lg p-8 max-w-2xl mx-auto">
          <h2 class="text-2xl font-semibold mb-4">We are creating a unique financial revolution. Join us!</h2>
          <p class="text-muted-foreground mb-6">Experience the future of cryptocurrency trading and payments with SenexPay.</p>
          <div class="flex gap-4 justify-center">
            <a href="https://app.senexpay.com" class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started
              <ArrowTopRightOnSquareIcon class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

// SEO Configuration
const { setPageSEO, setJSONLD, getContactPageSchema } = useSEO()

setPageSEO({
  title: 'Contact SenexPay - Get Help and Support',
  description: 'Get in touch with SenexPay for support, partnerships, or general inquiries. Contact our team via email, phone, or visit our office in Lagos, Nigeria.',
  keywords: 'senexpay contact, customer support, help center, contact information, partnership inquiries, senexpay office lagos',
  ogTitle: 'Contact SenexPay - Get Help and Support',
  ogDescription: 'Get in touch with SenexPay for support, partnerships, or general inquiries.',
  ogUrl: 'https://senexpay.com/contact',
  canonical: 'https://senexpay.com/contact',
  type: 'website'
})

// Set Contact page JSON-LD structured data
setJSONLD([
  getContactPageSchema(),
  {
    '@type': 'ContactPoint',
    '@id': 'https://senexpay.com/contact/#contactpoint',
    contactType: 'customer service',
    telephone: '+234-817-000-0001',
    email: 'hello@senexpay.com',
    areaServed: ['NG', 'ZA', 'GH', 'AE', 'GB'],
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  },
  {
    '@type': 'Place',
    '@id': 'https://senexpay.com/contact/#office',
    name: 'SenexPay Head Office',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1, Akin Adesola Street',
      addressLocality: 'Victoria Island',
      addressRegion: 'Lagos',
      postalCode: '101233',
      addressCountry: 'NG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.4229416,
      longitude: 3.4235967
    },
    telephone: '+234-817-000-0001',
    openingHours: 'Mo-Fr 09:00-18:00'
  }
])

const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'dark';
})
</script>

<style scoped>
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border: 1px solid hsl(var(--primary) / 0.2);
  color: hsl(var(--muted-foreground));
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: white;
}

.social-icon:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.social-icon:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.facebook-hover:hover {
  background-color: #2563eb;
  border-color: #2563eb;
}

.instagram-hover:hover {
  background-color: #dc2626;
  border-color: #dc2626;
}

.twitter-hover:hover {
  background-color: #0ea5e9;
  border-color: #0ea5e9;
}

.youtube-hover:hover {
  background-color: #dc2626;
  border-color: #dc2626;
}

.linkedin-hover:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

@media (max-width: 768px) {
  .social-icon {
    width: 4rem;
    height: 4rem;
  }
}
</style>