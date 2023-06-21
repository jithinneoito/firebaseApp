import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';
interface AppState {
  theme: Theme;
  // Other properties in your app slice
}
const initialState: AppState = {
  theme: 'light',
};

export const setTheme = (state: AppState, action: PayloadAction<Theme>) => {
  state.theme = action.payload;
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state: AppState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export default appSlice;
