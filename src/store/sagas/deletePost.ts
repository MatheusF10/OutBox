import { loadRequest } from './../actions/requestActions';
import { loadError } from '../actions/requestActions';
import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

export function* deletePostSaga(action: any): any {
  try {
    yield call(api.delete, `/api/posts/${action.payload}`);

    yield put(loadRequest());
  } catch (err) {
    yield put(loadError());
  }
}
