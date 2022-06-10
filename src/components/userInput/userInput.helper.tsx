import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModalState } from '../../hooks';
import { modalShow } from '../../store/actions/modalActions';

interface UseUserInputHelperOutput {
  disabled: boolean;
  modalState: boolean;
  setInput(): void;
}

export const useUserInputHelper = (): UseUserInputHelperOutput => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { modalState } = useModalState();

  const setInput = useCallback(() => {
    setDisabled(true);
    dispatch(modalShow(!modalState));
  }, [dispatch, modalState]);
  return { disabled, modalState, setInput };
};
