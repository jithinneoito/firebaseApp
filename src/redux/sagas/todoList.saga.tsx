import {takeEvery, put, call} from 'redux-saga/effects';
import {SET_THEME_COLOR, SET_TODO_LIST} from '../actions/app.actions';
import appSlice from '../slices/app.slice';
import firestore from '@react-native-firebase/firestore';
import todoSlice from '../slices/todoList.slice';


export const fetchData = async() => {
      const querySnapshot = await firestore().collection('todos').get();
     return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

function* setToDoList() {    
  try {
    const data: [] = yield call(fetchData);
    yield put(todoSlice.actions.setTodo(data));
  } catch (e) {
    // yield put(resultSlice.actions.setLoader(false));
  }
}

function* todoSaga() {
  yield takeEvery(SET_TODO_LIST, setToDoList);
}

export default todoSaga;
