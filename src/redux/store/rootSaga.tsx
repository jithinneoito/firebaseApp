import {all} from 'redux-saga/effects';
import appSaga from '../sagas/app.saga';
import todoSaga from '../sagas/todoList.saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    todoSaga(),
  ]);
}
