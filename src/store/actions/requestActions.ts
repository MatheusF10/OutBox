import { Post } from '../../types/types';
import { Actions } from '../../types/actions';
import { action } from 'typesafe-actions';

export const loadRequest = () => action(Actions.load_Request);
export const loadSuccess = (data: Array<Post>) =>
  action(Actions.load_Success, { post: data });
export const loadError = () => action(Actions.load_Error);
export const createPost = (title: string, text: string) =>
  action(Actions.create_Post, { title: title, text: text });
export const deletePost = (id: string) => action(Actions.delete_Post, id);
