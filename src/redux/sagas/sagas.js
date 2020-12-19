import { put, call, takeLatest } from 'redux-saga/effects';
import apiCall from '../api/apiCall';
import {
  GET_BOOKING, LOGIN,
} from '../types';
import { EMAIL } from '../../static/constant';
import filterBooking from '../../helpers/filterBooking';

export function* callToApi(response) {
  const { payload } = response;
  const {
    url, method, success, error, send, params, headers, typeFilter, keyFilter, valueFilter,
  } = payload;
  try {
    const result = yield call(apiCall, url, method, params || null, send || null, headers || null);
    let toSend = result.data;
    if (url === `${EMAIL}/bookings`) {
      toSend = filterBooking(result.data, typeFilter, keyFilter, valueFilter);
    }
    yield put({
      type: success,
      payload: toSend,
    });
  } catch (err) {
    yield put({
      type: error,
      payload: err,
    });
  }
}
export function* doLogin() {
  yield takeLatest(LOGIN, callToApi);
}
export function* getBooking() {
  yield takeLatest(GET_BOOKING, callToApi);
}
