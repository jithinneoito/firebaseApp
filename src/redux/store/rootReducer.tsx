import {combineReducers} from 'redux';
import appSlice from '../slices/app.slice';
import todoSlice from '../slices/todoList.slice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
  todo: todoSlice.reducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
