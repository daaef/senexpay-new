import defaultRates from '@/data/rates';

interface RateData {
  buy: number;
  sell: number;
  minimumOrder?: {
    buy: string;
    sell: string;
  };
  disable?: {
    buy: boolean;
    sell: boolean;
  };
  USD_ZAR?: {
    buy: string;
    sell: string;
  };
  USD_NGN?: {
    buy: string;
    sell: string;
  };
}

interface ConfigData {
  disableBuy?: boolean;
  minimumBuyUsd?: number;
  minimumSellUsd?: number;
  platformFee: number;
  platformFeeCap: number;
}

interface RatesResponse {
  [key: string]: RateData | ConfigData;
}

export const useRates = () => {
  const config = useRuntimeConfig();
  const rates = ref<RatesResponse>(defaultRates as RatesResponse);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchRates = async () => {
    loading.value = true;
    error.value = null;

      console.log('Fetching current rates from API:', `${config.public.apiUrl}/rates/`);
    try {
      const response = await $fetch<RatesResponse>(`${config.public.apiUrl}/rates/`);
      
      if (response && typeof response === 'object') {
        rates.value = response;
      } else {
        console.warn('Invalid rates data received, using fallback data');
        rates.value = defaultRates as RatesResponse;
      }
    } catch (err) {
      console.error('Failed to fetch rates:', err);
      error.value = 'Failed to load current rates';
      rates.value = defaultRates as RatesResponse; // Use fallback data
    } finally {
      loading.value = false;
    }
  };

  const getRateForPair = (crypto: string, fiat: string) => {
    const pairKey = `${crypto}_${fiat}`;
    const rate = rates.value[pairKey];
    return (rate && typeof rate === 'object' && 'buy' in rate && 'sell' in rate) ? rate as RateData : null;
  };
  const getConfig = () => {
    const configData = rates.value.config;
    const config = (configData && typeof configData === 'object' && 'platformFee' in configData) ? configData as ConfigData : null;
    return {
      disableBuy: config?.disableBuy ?? false,
      minimumBuyUsd: config?.minimumBuyUsd ?? 30,
      minimumSellUsd: config?.minimumSellUsd ?? 30,
      platformFee: config?.platformFee ?? 0.7,
      platformFeeCap: config?.platformFeeCap ?? 2
    };
  };

  return {
    data: readonly(rates),
    loading: readonly(loading),
    error: readonly(error),
    fetchRates,
    getRateForPair,
    getConfig
  };
};
