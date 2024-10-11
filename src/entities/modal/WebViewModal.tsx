import { Image, Modal, StyleSheet } from 'react-native';
import { WebView, WebViewProps } from 'react-native-webview';

import SafeScreenWithHeader from '../safeScreen/SafeScreenWithHeader';

import { colors } from '@/constants';

type WebViewModalProps = {
  visible: boolean;
  close: () => void;
  title?: string;
} & Required<Pick<WebViewProps, 'source'>>;

export default function WebViewModal({
  visible,
  source,
  close,
  title,
}: WebViewModalProps) {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeScreenWithHeader
        safeAreaStyle={[styles.safeArea]}
        scrollViewStyle={[styles.scroll]}
        title={title}
        right={{
          onPress: close,
          icon: (
            <Image
              source={require('@/assets/img/icon-x.png')}
              className="h-5 w-5"
              resizeMode="contain"
              tintColor={colors.black}
            />
          ),
        }}>
        <WebView source={source} />
      </SafeScreenWithHeader>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary[8],
  },
  scroll: {
    flexGrow: 1,
  },
});
