import { Actions } from './../../types/actions';
import { all, takeLatest } from '@redux-saga/core/effects';
import { load } from './postRequest';
import { create } from './createPost';
import { takeEvery } from 'redux-saga/effects';
import { deletePostSaga } from './deletePost';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(Actions.load_Request, load),
    takeEvery(Actions.create_Post, create),
    takeEvery(Actions.delete_Post, deletePostSaga),
  ]);
}
