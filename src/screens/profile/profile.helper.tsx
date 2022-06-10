import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModalState } from '../../hooks';
import { modalShow } from '../../store/actions/modalActions';

interface UseProfileScreenHelperOutput {
  modalState: boolean;
  disabled: boolean;
  setInput: () => void;
}

export const useProfileScreenHelper = (): UseProfileScreenHelperOutput => {
  const [disabled, setDisabled] = useState(false);
  const { modalState } = useModalState();
  const dispatch = useDispatch();

  const setInput = useCallback(() => {
    setDisabled(true);
    dispatch(modalShow(!modalState));
  }, [dispatch, modalState]);
  return {
    modalState,
    disabled,
    setInput,
  };
};
