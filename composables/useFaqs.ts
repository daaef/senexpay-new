import faqsData from '~/data/faqs.js'
import type { Faq } from '~/types/Faq'

export const useFaqs = () => {
  const config = useRuntimeConfig()
  const data = ref<Faq[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Demo FAQs as fallback
  const demoFaqs = faqsData as Faq[]

  // Fetch FAQs from API
  const getFaqs = async () => {
    loading.value = true
    error.value = null
    
    try {
      const { data: responseData, error: fetchError } = await useFetch(`${config.public.apiUrl}/faqs/`)
      
      if (fetchError.value) {
        console.error('Error fetching FAQs:', fetchError.value)
        error.value = 'Failed to load FAQs'
        data.value = demoFaqs
      } else {
        console.log('res.data is', responseData.value)
        data.value = responseData.value as Faq[] ?? demoFaqs
      }
    } catch (err) {
      console.error('Error in getFaqs:', err)
      error.value = 'Failed to load FAQs'
      data.value = demoFaqs
    } finally {
      loading.value = false
    }
  }

  // Filter FAQs by category
  const getFaqsByCategory = (category: number | string) => {
    if (category === 0 || category === '') {
      return data.value
    }
    return data.value.filter((faq: Faq) => faq.category === category)
  }

  // Search FAQs
  const searchFaqs = (query: string) => {
    if (!query.trim()) {
      return data.value
    }
    
    const searchTerm = query.toLowerCase()
    return data.value.filter((faq: Faq) => 
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
    )
  }

  // Get FAQ by ID
  const getFaqById = (id: number) => {
    return data.value.find((faq: Faq) => faq.id === id)
  }

  // Get categories
  const getCategories = () => {
    const categories = [
      { id: 0, name: 'All', filter: '' },
      { id: 1, name: 'General', filter: 'general' },
      { id: 2, name: 'Security / KYC', filter: 'kyc' },
      { id: 3, name: 'Rewards / Referrals', filter: 'rewards' },
      { id: 5, name: 'Exchange', filter: 'exchange' }
    ]
    return categories
  }

  // Initialize data
  const initialize = async () => {
    if (data.value.length === 0) {
      await getFaqs()
    }
  }

  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    getFaqs,
    getFaqsByCategory,
    searchFaqs,
    getFaqById,
    getCategories,
    initialize
  }
}
