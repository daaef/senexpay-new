<template>
  <section
      class="min-h-[80vh] pb-[60px] relative pt-[120px] bg-gradient-to-b from-[hsl(var(--page-background))]/70 to-background">
    <ClientOnly>
      <Tetris
          class="h-full z-0 absolute top-0 w-full"
          :base="15"
          square-color="#00C16A"
      />
    </ClientOnly>
    <div
        class="h-full absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-[hsl(var(--page-background))]/90 to-background">
    </div>
    <div class="container relative z-20">
      <div class="h-[20vh] flex items-center justify-between">
        <h4 class="text-6xl font-bold">Careers</h4>
      </div>
      <h3 class="my-6">Current Openings:</h3>
      <div class="border-t border-accent/10 grid md:grid-cols-[1fr_3.5fr]">
        <div class="border-r border-accent/10 border-b py-8 pr-4">
          <p class="font-medium">
            Cannot find A suitable vacancy? drop us a line at
            <a class="font-bold text-accent" href="mailto:hello@senexpay.com">
              hello@senexpay.com
            </a>
          </p>
        </div>
        <div class="grid gap-4">
          <div v-if="loading" class="py-8 px-4 text-center">
            <p>Loading job openings...</p>
          </div>
          <div v-else-if="jobs.length === 0" class="py-8 px-4 text-center">
            <p class="text-muted-foreground">No current openings available. Check back soon!</p>
          </div>
          <a v-else
             v-for="job in jobs" 
             :key="job.id"
             :href="job.link || '#'" 
             target="_blank"
             rel="noopener"
             class="flex items-center justify-between py-8 px-4 border-b border-accent/10 group hover:bg-primary/5 transition-colors"
          >
            <div>
              <h4 class="text-4xl font-semibold">{{ job.title }}</h4>
              <p class="text-sm font-light mt-6">
                Location: {{ job.location || 'Remote' }}
                <span v-if="job.type" class="ml-4">• {{ job.type }}</span>
              </p>
              <p v-if="job.department" class="text-sm text-muted-foreground mt-2">
                Department: {{ job.department }}
              </p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="transition-transform duration-300 h-8 w-8 group-hover:rotate-[-45deg]"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.105.074l.014.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.092l.01-.009l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                    fill="currentColor"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.005-14.242a1 1 0 0 0 0 1.414L13.833 11H7.757a1 1 0 0 0 0 2h6.076l-1.828 1.829a1 1 0 0 0 1.414 1.414l3.535-3.536a1 1 0 0 0 0-1.414L13.42 7.758a1 1 0 0 0-1.414 0Z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// SEO Configuration
const { setPageSEO, setJSONLD, getJobPostingSchema } = useSEO()

const colorMode = useColorMode();
const { jobs, loading, fetchJobs } = useJobs();

// Set basic SEO first
setPageSEO({
  title: 'Careers at SenexPay - Join Our Team',
  description: 'Join SenexPay and help build the future of cryptocurrency in Africa. Explore career opportunities in blockchain, fintech, engineering, marketing, and more.',
  keywords: 'senexpay careers, jobs at senexpay, blockchain jobs, fintech careers, cryptocurrency jobs nigeria, africa fintech jobs, remote blockchain jobs',
  ogTitle: 'Careers at SenexPay - Join Our Team',
  ogDescription: 'Join SenexPay and help build the future of cryptocurrency in Africa.',
  ogUrl: 'https://senexpay.com/careers',
  canonical: 'https://senexpay.com/careers',
  type: 'website'
})

// Watch for jobs data to update JSON-LD
watchEffect(() => {
  if (jobs.value && jobs.value.length > 0) {
    const jobPostings = jobs.value.map(job => ({
      title: job.title,
      description: job.description || `Join SenexPay as a ${job.title}`,
      location: job.location || 'Lagos, Nigeria',
      type: job.type || 'Full-time',
      department: job.department || 'General',
      experience: job.experience || 'Mid-level',
      salary: job.salary
    }))

    setJSONLD([
      {
        '@type': 'WebPage',
        '@id': 'https://senexpay.com/careers/#webpage',
        isPartOf: { '@id': 'https://senexpay.com/#website' },
        url: 'https://senexpay.com/careers/',
        inLanguage: 'en-US',
        name: 'Careers at SenexPay - Join Our Team',
        about: {
          '@id': 'https://senexpay.com/#organization'
        },
        dateModified: new Date().toISOString(),
        description: 'Join SenexPay and help build the future of cryptocurrency in Africa.',
        potentialAction: {
          '@type': 'ApplyAction',
          target: 'https://senexpay.com/careers/'
        }
      },
      ...getJobPostingSchema(jobPostings)
    ])
  } else {
    // Set basic page schema if no jobs available
    setJSONLD([
      {
        '@type': 'WebPage',
        '@id': 'https://senexpay.com/careers/#webpage',
        isPartOf: { '@id': 'https://senexpay.com/#website' },
        url: 'https://senexpay.com/careers/',
        inLanguage: 'en-US',
        name: 'Careers at SenexPay - Join Our Team',
        about: {
          '@id': 'https://senexpay.com/#organization'
        },
        dateModified: new Date().toISOString(),
        description: 'Join SenexPay and help build the future of cryptocurrency in Africa.',
        potentialAction: {
          '@type': 'ApplyAction',
          target: 'https://senexpay.com/careers/'
        }
      }
    ])
  }
})

onMounted(() => {
  colorMode.preference = 'dark';
  fetchJobs();
});
</script>