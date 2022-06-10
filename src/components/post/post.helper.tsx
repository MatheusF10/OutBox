import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions/requestActions';

interface UsePostHelperOutput {
  handleDeletePost: (id: string) => void;
}

export const usePostHelper = (): UsePostHelperOutput => {
  const dispatch = useDispatch();
  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id));
  };

  /* const handleLikePost = (id: string) => {
    //dispatch(likePost(id))
  };*/

  return { handleDeletePost };
};
