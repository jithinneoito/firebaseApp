import 'react-native-gesture-handler';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SecondScreen from '../../screens/SecondScreen.tsx/SecondScreen';
import FirstScreen from '../../screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();
const AppTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FirstScreen" component={FirstScreen} />
      <Tab.Screen name="SecondScreen" component={SecondScreen} />
    </Tab.Navigator>
  );
};
export default AppTabNavigation;
