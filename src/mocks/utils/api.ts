import { API_BASE_URL } from '@/constants/api';

export function getApiUrl(path: string) {
  return `${API_BASE_URL}/${path}`;
}
