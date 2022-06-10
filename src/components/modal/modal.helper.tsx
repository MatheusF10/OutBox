import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModalState } from '../../hooks';
import { modalShow } from '../../store/actions/modalActions';
import { createPost } from '../../store/actions/requestActions';

interface UseModalHelperOutput {
  handleCloseModal: () => void;
  handleCreatePost: (title: string, text: string) => void;
  handleOnChangeTitle: (e: any) => void;
  handleOnChangeText: (e: any) => void;
  title: string;
  text: string;
}

export const useModalHelper = (): UseModalHelperOutput => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleOnChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleOnChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const { modalState } = useModalState();

  const handleCloseModal = useCallback(() => {
    dispatch(modalShow(!modalState));
  }, [dispatch, modalState]);

  const handleCreatePost = useCallback(
    (title: string, text: string) => {
      dispatch(createPost(title, text));
      handleCloseModal();
    },
    [dispatch, handleCloseModal]
  );
  return {
    handleCloseModal,
    handleCreatePost,
    text,
    title,
    handleOnChangeText,
    handleOnChangeTitle,
  };
};
