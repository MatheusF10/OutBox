import { useSelector } from 'react-redux';
import { Post, StoreState } from '../../types/types';

interface UsePostsOutput {
  postsState: Post[];
}

export const usePosts = (): UsePostsOutput => {
  const postsState = useSelector((state: StoreState) => {
    return state.post.posts;
  });
  return { postsState };
};
