import EncryptedStorage from 'react-native-encrypted-storage';

import { CredentialStoreState } from '@/store/stores/credentialStore';

export type EncryptedStorageRecord = {
  credential_token: Required<CredentialStoreState>;
};

type EncryptedStorageKey = keyof EncryptedStorageRecord;

const setEncryptStorage = async <T extends EncryptedStorageKey>(
  key: T,
  data: EncryptedStorageRecord[T],
) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncryptStorage = async (key: EncryptedStorageKey) => {
  const storedData = await EncryptedStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : undefined;
};

const removeEncryptStorage = async (key: EncryptedStorageKey) => {
  try {
    console.log('removeEncryptStorage');
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export { setEncryptStorage, getEncryptStorage, removeEncryptStorage };
