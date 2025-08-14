import defaultTestimonials from '@/data/testimonials';

interface Testimonial {
  id?: number;
  name: string;
  photo: string;
  reviewText: string;
  created: string;
  rating?: number;
}

export const useTestimonials = () => {
  const config = useRuntimeConfig();
  const testimonials = ref<Testimonial[]>(defaultTestimonials);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const fetchTestimonials = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch(`${config.public.apiUrl}/testimonials/`);
      
      if (response && Array.isArray(response)) {
        testimonials.value = response as Testimonial[];
      } else if (response && (response as any).data && Array.isArray((response as any).data)) {
        testimonials.value = (response as any).data as Testimonial[];
      } else {
        console.warn('Invalid testimonials data received, using fallback data');
        testimonials.value = defaultTestimonials;
      }
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
      error.value = 'Failed to load testimonials';
      testimonials.value = defaultTestimonials; // Use fallback data
    } finally {
      loading.value = false;
    }
  };

  const getFeaturedTestimonials = (limit: number = 3) => {
    return testimonials.value.slice(0, limit);
  };

  return {
    testimonials: readonly(testimonials),
    loading: readonly(loading),
    error: readonly(error),
    fetchTestimonials,
    getFeaturedTestimonials
  };
};
