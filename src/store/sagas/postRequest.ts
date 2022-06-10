import { loadError } from './../actions/requestActions';
import api from '../../services/api';
import { call, put } from 'redux-saga/effects';
import { loadSuccess } from '../actions/requestActions';

export function* load(): any {
  try {
    const response = yield call(api.get, '/api/posts');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadError());
  }
}
