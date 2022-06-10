import { useSelector } from 'react-redux';
import { StoreState } from '../../types/types';

interface UseModalStateOutput {
  modalState: boolean;
}

export const useModalState = (): UseModalStateOutput => {
  const modalState = useSelector((state: StoreState) => {
    return state.modal.modalShow;
  });
  return { modalState };
};
