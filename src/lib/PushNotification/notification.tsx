import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

const Notification = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };
  return null;
};

export default Notification;
