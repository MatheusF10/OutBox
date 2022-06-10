import { useDispatch } from 'react-redux';
import { usePosts } from '../../hooks';
import { loadRequest } from '../../store/actions/requestActions';
import { Post } from '../../types/types';

interface UseHomeHelperOutput {
  loadPosts: () => void;
  postsState: Post[];
}

export const useHomeHelper = (): UseHomeHelperOutput => {
  const dispatch = useDispatch();
  const { postsState } = usePosts();
  const loadPosts = () => {
    dispatch(loadRequest());
  };
  return { loadPosts, postsState };
};
