import {useDispatch, useSelector} from 'react-redux';
import {Appearance, StyleSheet} from 'react-native';
import appSlice from '../../redux/slices/app.slice';
// import {RootState} from '../redux/store/root.reducer';

export const useTheme = () => {
  const dispatch = useDispatch();
  let colorScheme = Appearance.getColorScheme();
  const currentTheme = useSelector((State: any) => State.app.theme);
  const changeTheme = (theme: String) => {
    switch (theme) {
      case 'light':
        dispatch(appSlice.actions.setTheme('light'));
        break;
      case 'dark':
        dispatch(appSlice.actions.setTheme('dark'));

        break;
    }
  };
  const theme = StyleSheet.create({
    backgroundColor: {
      backgroundColor: currentTheme === 'dark' ? '#2D2F33' : '#E1E2E8',
    },
  });

  return {changeTheme, theme, currentTheme};
};
