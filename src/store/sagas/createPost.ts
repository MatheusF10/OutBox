import { loadRequest } from './../actions/requestActions';
import { loadError } from '../actions/requestActions';
import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

export function* create(action: any): any {
  try {
    const data = { title: action.payload.title, text: action.payload.text };
    yield call(api.post, '/api/posts', data);

    yield put(loadRequest());
  } catch (err) {
    yield put(loadError());
  }
}
