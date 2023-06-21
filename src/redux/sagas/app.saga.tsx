import {takeEvery, put} from 'redux-saga/effects';
import {SET_THEME_COLOR} from '../actions/app.actions';
import appSlice from '../slices/app.slice';

function* setThemeColor(action: any) {
  try {
    yield put(appSlice.actions.setTheme(action.payload));
  } catch (e) {
    // yield put(resultSlice.actions.setLoader(false));
  }
}

function* appSaga() {
  yield takeEvery(SET_THEME_COLOR, setThemeColor);
}

export default appSaga;
