import Clipboard from '@react-native-clipboard/clipboard';

import { showToast, ToastContents } from './toast';

export function setStringToClipboard(
  content: string,
  toastContents?: ToastContents,
) {
  if (toastContents === undefined) {
    toastContents = {
      title: '복사 완료',
      content: `${content}가 클립보드에 정상적으로 복사되었습니다.`,
    };
  }

  Clipboard.setString(content);
  showToast(toastContents, 'success');
}

export async function getStringToClipboard() {
  return Clipboard.getString();
}
