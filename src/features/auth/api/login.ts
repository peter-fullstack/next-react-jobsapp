import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { AuthUser, LoginData } from '../types';

export const login = (
  data: LoginData
): Promise<{
  user: AuthUser;
}> => {
  console.log('login data:', data);
  return apiClient.post('/auth/login', data);
};

const handleLogin = async (
  data: LoginData
): Promise<{ user: AuthUser }> => {
  try {
    return apiClient.post('/auth/login', data);
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const {
    mutate: submit,
    isLoading,
    data,
  } = useMutation({
    mutationFn: handleLogin,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['auth-user'], data);
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
};
