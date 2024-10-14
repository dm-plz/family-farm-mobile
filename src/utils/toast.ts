import Toast, { type ToastType } from 'react-native-toast-message';

export type ToastContents = {
  title?: string;
  content?: string;
};

export function showToast(
  toastContents?: ToastContents,
  type: ToastType = 'info',
) {
  Toast.show({
    type,
    text1: toastContents?.title,
    text2: toastContents?.content,
  });
}
