import { MutationFunction, useMutation } from '@tanstack/react-query';

import { postSignIn, ResponseToken } from '@/api/auth';
import { setHeader } from '@/api/ky';
import { storageKeys } from '@/constants';
import { UseMutationCustomOptions } from '@/types';
import { getEncryptStorage, setEncryptStorage } from '@/utils';

function useSignIn<T>(
  signInAPI: MutationFunction<ResponseToken, T>,
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: signInAPI,
    onSuccess: ({ accessToken, refreshToken }) => {
      setEncryptStorage(storageKeys.REFRESH_TOKEN, refreshToken);
      setHeader('Authorization', `Bearer ${accessToken}`);
    },
    onSettled: async () => {
      const result = await getEncryptStorage(storageKeys.REFRESH_TOKEN);
      console.log(result);
    },
    ...mutationOptions,
  });
}

function useKaKaoSignIn(mutationOptions?: UseMutationCustomOptions) {
  return useSignIn(postSignIn, mutationOptions);
}

function useAuth() {
  // const getProfileQuery = useGetProfile({
  //   enabled: refreshTokenQuery.isSuccess,
  // });
  const isSignedIn = false;
  const kakaoSignInMutation = useKaKaoSignIn();

  return { isSignedIn, kakaoSignInMutation };
}

export default useAuth;
