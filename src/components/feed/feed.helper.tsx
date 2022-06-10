import { usePosts } from '../../hooks';
import { Post } from '../../types/types';

interface UseFeedHelperOutput {
  postsState: Post[];
}

export const useFeedHelper = (): UseFeedHelperOutput => {
  const { postsState } = usePosts();
  return { postsState };
};
