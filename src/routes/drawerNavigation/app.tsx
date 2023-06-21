import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstScreen from '../../screens/HomeScreen/HomeScreen';
import SecondScreen from '../../screens/SecondScreen.tsx/SecondScreen';
const Drawer = createDrawerNavigator();

const AppDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FirstScreen" component={FirstScreen} />
      <Drawer.Screen name="SecondScreen" component={SecondScreen} />
    </Drawer.Navigator>
  );
};
export default AppDrawerNavigation;
