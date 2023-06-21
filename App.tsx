// import {View} from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppScreens from './src/routes/stackNavigation/app';
import NonAuthScreens from './src/routes/stackNavigation/nonAuthStack'
import Notification from './src/lib/PushNotification/notification';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { notificationListenr, requestUserPermission } from './src/hooks/PushNotification/pushNotification'

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    requestUserPermission();
    notificationListenr();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  if (initializing) return null;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Notification />
        {user ?
          <AppScreens /> :
          <NonAuthScreens />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
