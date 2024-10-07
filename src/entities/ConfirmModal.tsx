import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { TextBold, TextRegular } from './fonts';

function ConfirmModal() {
  return (
    <Modal>
      <View className="flex-1 items-center justify-center bg-black/40">
        <View className="rounded-xl bg-white pt-4" style={[styles.contentBox]}>
          <View className="px-5">
            <TextBold className="text-center text-h3 leading-6">
              정말 뒤로 가시겠어요?
            </TextBold>
          </View>
          <View className="mt-3 px-10 py-3">
            <TextRegular className="text-center text-gray-400">
              작성한 내용이 저장되지 않아요.
            </TextRegular>
          </View>
          <View className="flex-row justify-center space-x-2 px-5 pb-5 pt-3">
            <Pressable className="flex-grow rounded-lg bg-primary-8 px-9 py-3.5">
              <TextBold className="text-center text-h4 leading-4 text-primary-100">
                나가기
              </TextBold>
            </Pressable>
            <Pressable className="flex-grow rounded-lg bg-primary-100 px-9 py-3.5">
              <TextBold className="text-center text-h4 leading-4 text-white">
                계속 답변
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
