import { all } from 'redux-saga/effects';
import { doLogin, getBooking } from './sagas';

export default function* rootSaga() {
  yield all([
    doLogin(),
    getBooking(),
  ]);
}
