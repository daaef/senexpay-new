export interface SEOOptions {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export interface JobPosting {
  title: string
  description: string
  location: string
  type: string
  department: string
  experience: string
  salary?: string
}

export interface FAQ {
  question: string
  answer: string
}

export const useSEO = () => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://senexpay.com'
  
  const setPageSEO = (options: SEOOptions) => {
    const {
      title,
      description,
      keywords,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      twitterTitle,
      twitterDescription,
      twitterImage,
      canonical,
      type = 'website',
      publishedTime,
      modifiedTime
    } = options

    const pageTitle = title || 'SenexPay: Buy, Sell & Store Bitcoin, Ethereum and USDT'
    const pageDescription = description || `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!`
    
    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      keywords: keywords || 'bitcoin, exchange, transfer, tether, trade, btc, sell, buy, nigeria, sell bitcoin, buy bitcoin, otc, buy bitcoins in nigeria, sell bitcoins in nigeria, fast, secure, reliable, senex, senexpay',
      
      // Open Graph
      ogTitle: ogTitle || pageTitle,
      ogDescription: ogDescription || pageDescription,
      ogImage: ogImage || `${siteUrl}/img/senexpay-og-image.png`,
      ogUrl: ogUrl || siteUrl,
      ogType: type,
      ogLocale: 'en_NG',
      ogSiteName: 'SenexPay',
      
      // Twitter
      twitterCard: 'summary_large_image',
      twitterTitle: twitterTitle || pageTitle,
      twitterDescription: twitterDescription || pageDescription,
      twitterImage: twitterImage || `${siteUrl}/img/senexpay-og-image-sq.png`,
      twitterSite: '@senexpay',
      twitterCreator: '@senexpay',
        // Additional
      themeColor: '#041d45',
      robots: 'index, follow',
      
      // Article specific
      ...(publishedTime && { articlePublishedTime: publishedTime }),
      ...(modifiedTime && { articleModifiedTime: modifiedTime }),
    })

    // Canonical link
    useHead({
      link: [
        ...(canonical ? [{ rel: 'canonical', href: canonical }] : [])
      ]
    })
  }

  const getOrganizationSchema = () => {
    return {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'SenexPay',
      url: siteUrl,
      sameAs: [
        'https://web.facebook.com/senexpay/',
        'https://twitter.com/senexpay/',
        'https://www.instagram.com/senexpay/',
        'https://linkedin.com/company/senexpay/',
        'https://www.youtube.com/@senexpayhq'
      ],
      logo: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        inLanguage: 'en-US',
        url: `${siteUrl}/senexpay-logo.jpeg`,
        contentURL: `${siteUrl}/senexpay-logo.jpeg`,
        width: 200,
        height: 200,
        caption: 'Reimagining crypto for all'
      },
      foundingDate: '2016-01-01',
      slogan: 'Reimagining crypto for all',
      currenciesAccepted: 'USD,NGN,ZAR,BTC,USDT',
      paymentAccepted: 'Transfer',
      image: { '@id': `${siteUrl}/#logo` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1, Adeola Adeoye Street',
        addressLocality: 'Lagos',
        addressRegion: 'Lagos',
        postalCode: '101233',
        addressCountry: 'NG'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+234-817-000-0001',
        contactType: 'customer service',
        areaServed: ['NG', 'ZA', 'GH', 'AE', 'GB'],
        availableLanguage: 'English'
      }
    }
  }

  const getWebsiteSchema = () => {
    return {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'SenexPay',
      description: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure.`,
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
  }

  const getMobileAppSchemas = () => {
    return [
      {
        '@type': 'SoftwareApplication',
        '@id': '4976013114347311704',
        applicationCategory: 'FinanceApplication',
        installUrl: 'https://play.google.com/store/apps/details?id=com.senexpay.mobile&hl=en&gl=NG',
        operatingSystem: 'Android',
        name: 'SenexPay: Buy & Store Bitcoin',
        description: 'Buy, sell and store Bitcoin, USDT and other cryptocurrencies safely and securely.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'MobileApplication',
        '@id': '1627864145',
        applicationCategory: 'FinanceApplication',
        installUrl: 'https://apps.apple.com/us/app/senexpay-trade-bitcoin-usdt/id1627864145',
        name: 'SenexPay: Buy & Store Bitcoin',
        operatingSystem: 'iOS',
        description: 'Buy, sell and store Bitcoin, USDT and other cryptocurrencies safely and securely.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    ]
  }

  const setJSONLD = (schema: object | object[]) => {
    const baseSchemas = [
      getOrganizationSchema(),
      getWebsiteSchema(),
      ...getMobileAppSchemas()
    ]

    const allSchemas = Array.isArray(schema) 
      ? [...baseSchemas, ...schema]
      : [...baseSchemas, schema]

    useJsonld({
      '@context': 'https://schema.org',
      '@graph': allSchemas
    })
  }

  const getFAQSchema = (faqs: FAQ[]) => {
    return {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/faq/#faq`,
      url: `${siteUrl}/faq/`,
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      about: {
        '@id': `${siteUrl}/#organization`
      },
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }

  const getJobPostingSchema = (jobs: JobPosting[]) => {
    return jobs.map(job => ({
      '@type': 'JobPosting',
      title: job.title,
      description: job.description,
      hiringOrganization: {
        '@id': `${siteUrl}/#organization`
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: job.location,
          addressCountry: 'NG'
        }
      },
      employmentType: job.type.toUpperCase(),
      datePosted: new Date().toISOString(),
      validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
      baseSalary: job.salary ? {
        '@type': 'MonetaryAmount',
        currency: 'NGN',
        value: {
          '@type': 'QuantitativeValue',
          value: job.salary
        }
      } : undefined
    }))
  }

  const getAboutPageSchema = () => {
    return {
      '@type': 'AboutPage',
      '@id': `${siteUrl}/about/#webpage`,
      isPartOf: { '@id': `${siteUrl}/#website` },
      url: `${siteUrl}/about/`,
      inLanguage: 'en-US',
      name: 'About SenexPay - Our Mission, Vision and Core Values',
      about: {
        '@id': `${siteUrl}/#organization`
      },
      datePublished: '2016-09-14T08:13:22+00:00',
      dateModified: new Date().toISOString(),
      description: 'Learn about SenexPay\'s mission to make financial services accessible to every person on the African continent.',
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${siteUrl}/about/`]
      }
    }
  }

  const getContactPageSchema = () => {
    return {
      '@type': 'ContactPage',
      '@id': `${siteUrl}/contact/#webpage`,
      isPartOf: { '@id': `${siteUrl}/#website` },
      url: `${siteUrl}/contact/`,
      inLanguage: 'en-US',
      name: 'Contact SenexPay - Get Help and Support',
      about: {
        '@id': `${siteUrl}/#organization`
      },
      dateModified: new Date().toISOString(),
      description: 'Get in touch with SenexPay for support, partnerships, or general inquiries.',
      potentialAction: {
        '@type': 'CommunicateAction',
        target: [`${siteUrl}/contact/`]
      }
    }
  }

  return {
    setPageSEO,
    setJSONLD,
    getFAQSchema,
    getJobPostingSchema,
    getAboutPageSchema,
    getContactPageSchema,
    getOrganizationSchema,
    getWebsiteSchema,
    getMobileAppSchemas
  }
}
