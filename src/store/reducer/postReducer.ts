import { Values } from './../../types/types';
import { Actions } from './../../types/actions';
import { Post } from '../../types/types';
import { Reducer } from 'redux';

export interface PostState {
  posts: Array<Post>;
  value: Values;
  error: boolean;
  loading: boolean;
}

const initialState = {
  posts: [],
  value: {
    title: '',
    text: '',
  },
  error: false,
  loading: false,
};

export const postReducer: Reducer<PostState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Actions.load_Request: {
      return { ...state, loading: true };
    }
    case Actions.load_Success: {
      return { ...state, posts: action.payload.post, loading: false };
    }
    case Actions.load_Error: {
      return { ...state, error: true };
    }
    case Actions.create_Post: {
      return {
        ...state,
        value: { title: action.payload.title, text: action.payload.text },
      };
    }
  }
  return state;
};
