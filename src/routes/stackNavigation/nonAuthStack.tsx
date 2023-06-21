import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../../screens/SignupSreen/SignupScreen';

const AppScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppScreens;
