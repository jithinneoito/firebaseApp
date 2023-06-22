import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Todo = [];
interface AppState {
  data: Todo;
}
const initialState: AppState = {
  data: [],
};

export const setTodo = (state: AppState, action: PayloadAction<Todo>) => {
  console.log('state', state);
  state.data = action.payload;
};

const todoSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTodo: (state: AppState, action: PayloadAction<Todo>) => {
      state.data = action.payload;
    },
  },
});

export default todoSlice;
