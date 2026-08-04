import Axios from 'axios';

import { API_URL } from '@/config/constants';
import { notificationsStore } from '@/stores/notifications';

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('API_URL:', API_URL);

apiClient.interceptors.response.use(
  (response) => {
    const headerEntries = Object.entries(
      response.headers
    );

    const authTokenHeader = headerEntries.find(
      ([key]) => key.toLowerCase() === 'auth-token'
    );

    const authTokenHeaderValue = authTokenHeader
      ? authTokenHeader[1]
      : null;

    console.log(
      'Auth-Token header value:',
      authTokenHeaderValue
    );

    // Update default headers for future requests
    if (authTokenHeaderValue as string) {
      apiClient.defaults.headers.common['auth-token'] =
        authTokenHeaderValue as string;
    }

    return response.data;
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message;

    notificationsStore.getState().showNotification({
      type: 'error',
      title: 'Error',
      duration: 5000,
      message,
    });

    return Promise.reject(error);
  }
);
