import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { TextBold, TextRegular } from '@/entities/fonts';
import { useModalStore } from '@/store/stores';

function ConfirmModal() {
  const { isOpen, title, description, cancelText, confirmText, closeModal } =
    useModalStore();

  return (
    <Modal visible={isOpen} animationType="fade" transparent={true}>
      <View className="absolute left-0 top-0 h-full w-full items-center justify-center bg-black/40">
        <View className="rounded-xl bg-white pt-4" style={[styles.contentBox]}>
          <View className="px-5">
            <TextBold className="text-center text-h3 leading-6">
              {title}
            </TextBold>
          </View>
          <View className="mt-3 px-10 py-3">
            <TextRegular className="text-center text-gray-400">
              {description}
            </TextRegular>
          </View>
          <View className="flex-row justify-center space-x-2 px-5 pb-5 pt-3">
            <Pressable
              className="flex-grow rounded-lg bg-primary-8 px-9 py-3.5"
              onPress={() => closeModal()}>
              <TextBold className="text-center text-h4 leading-4 text-primary-100">
                {cancelText}
              </TextBold>
            </Pressable>
            <Pressable className="flex-grow rounded-lg bg-primary-100 px-9 py-3.5">
              <TextBold className="text-center text-h4 leading-4 text-white">
                {confirmText}
              </TextBold>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    minWidth: 320,
  },
});

export default ConfirmModal;
