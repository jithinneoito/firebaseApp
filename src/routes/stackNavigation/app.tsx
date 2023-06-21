import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppBottomNavigation from '../bottomTabNavigation/app';

const AppScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'App'}>
      <Stack.Screen
        name="AppBottomNavigation"
        component={AppBottomNavigation}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppScreens;
