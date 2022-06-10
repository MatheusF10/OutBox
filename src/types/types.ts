import { ModalState } from '../store/reducer/modalStateReducer';
import { PostState } from '../store/reducer/postReducer';

export interface Post {
  _id: string;
  title: string;
  text: string;
}

export interface StoreState {
  post: PostState;
  modal: ModalState;
}

export interface Values {
  title: string;
  text: string;
}
