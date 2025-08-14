interface Job {
  id: number;
  title: string;
  location?: string;
  type?: string;
  department?: string;
  description?: string;
  requirements?: string[];
  link?: string;
  isActive?: boolean;
  postedDate?: string;
}

const defaultJobs: Job[] = [
  {
    id: 1,
    title: "Sales Manager",
    location: "Remote",
    type: "Full-time",
    department: "Sales",
    description: "Lead our sales team and drive growth across African markets.",
    requirements: ["5+ years sales experience", "Leadership skills", "Fintech experience preferred"],
    link: "mailto:hello@senexpay.com?subject=Application for Sales Manager Position",
    isActive: true,
    postedDate: "2024-01-15"
  },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     location: "Lagos, Nigeria",
//     type: "Full-time",
//     department: "Engineering",
//     description: "Build and maintain our web applications using modern frameworks.",
//     requirements: ["3+ years React/Vue experience", "TypeScript proficiency", "UI/UX skills"],
//     link: "mailto:hello@senexpay.com?subject=Application for Frontend Developer Position",
//     isActive: true,
//     postedDate: "2024-01-10"
//   },
//   {
//     id: 3,
//     title: "Product Manager",
//     location: "Remote",
//     type: "Full-time",
//     department: "Product",
//     description: "Drive product strategy and roadmap for our fintech platform.",
//     requirements: ["Product management experience", "Fintech background", "Data-driven mindset"],
//     link: "mailto:hello@senexpay.com?subject=Application for Product Manager Position",
//     isActive: true,
//     postedDate: "2024-01-05"
//   }
];

export const useJobs = () => {
  const config = useRuntimeConfig();
  const jobs = ref<Job[]>(defaultJobs);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchJobs = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch(`${config.public.apiUrl}/careers/`);
      
      if (response && Array.isArray(response)) {
        jobs.value = response as Job[];
      } else if (response && (response as any).data && Array.isArray((response as any).data)) {
        jobs.value = (response as any).data as Job[];
      } else if (response && (response as any).jobs && Array.isArray((response as any).jobs)) {
        jobs.value = (response as any).jobs as Job[];
      } else {
        console.warn('Invalid jobs data received, using fallback data');
        jobs.value = defaultJobs;
      }
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
      error.value = 'Failed to load job openings';
      jobs.value = defaultJobs; // Use fallback data
    } finally {
      loading.value = false;
    }
  };

  const getActiveJobs = () => {
    return jobs.value.filter(job => job.isActive !== false);
  };

  const getJobsByDepartment = (department: string) => {
    return jobs.value.filter(job => 
      job.department?.toLowerCase() === department.toLowerCase()
    );
  };

  return {
    jobs: readonly(jobs),
    loading: readonly(loading),
    error: readonly(error),
    fetchJobs,
    getActiveJobs,
    getJobsByDepartment
  };
};
