import {all} from 'redux-saga/effects';
import appSaga from '../sagas/app.saga';

export default function* rootSaga() {
  yield all([appSaga()]);
}
