import { create } from 'zustand';

type ModalStoreState = {
  isOpen: boolean;
  title: string;
  description: string;
  cancelText: string;
  confirmText: string;
};
type ModalStoreActions = {
  openModal: (props: {
    title: string;
    description?: string;
    cancelText?: string;
    confirmText?: string;
  }) => void;
  closeModal: () => void;
};
type ModalStore = ModalStoreState & ModalStoreActions;

const useModalStore = create<ModalStore>(set => ({
  isOpen: false,
  title: '',
  description: '',
  cancelText: '취소',
  confirmText: '확인',
  openModal: ({
    title,
    description = '',
    cancelText = '취소',
    confirmText = '확인',
  }) =>
    set(() => ({ isOpen: true, title, description, cancelText, confirmText })),
  closeModal: () => set(() => ({ isOpen: false })),
}));

export default useModalStore;
