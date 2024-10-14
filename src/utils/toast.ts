import Toast, {
  type ToastProps,
  type ToastType,
} from 'react-native-toast-message';

export type ToastContents = {
  title?: string;
  content?: string;
};
type ToastOptions = Omit<ToastProps, 'text1' | 'text2' | 'type'>;

export function showToast(
  toastContents?: ToastContents,
  type: ToastType = 'info',
  options?: ToastOptions,
) {
  Toast.show({
    type,
    text1: toastContents?.title,
    text2: toastContents?.content,
    ...options,
  });
}
