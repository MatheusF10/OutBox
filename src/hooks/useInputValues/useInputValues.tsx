import { useSelector } from 'react-redux';
import { StoreState } from '../../types/types';

interface UseInputValueOutput {
  values: {
    title: string;
    text: string;
  };
}

export const useInputValue = (): UseInputValueOutput => {
  const values = useSelector((state: StoreState) => {
    return state.post.value;
  });
  return { values };
};
