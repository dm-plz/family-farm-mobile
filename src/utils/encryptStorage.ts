import EncryptedStorage from 'react-native-encrypted-storage';

export type EncryptedStorageRecord = {};

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
  await EncryptedStorage.removeItem(key);
};

export { setEncryptStorage, getEncryptStorage, removeEncryptStorage };
