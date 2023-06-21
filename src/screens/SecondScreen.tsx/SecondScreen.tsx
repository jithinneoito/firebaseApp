import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks/DarkMode/Dartheme';

const SecondScreen = () => {
  const {theme, changeTheme} = useTheme();

  return (
    <View style={[styles.container, theme.backgroundColor]}>
      <Button title="Press me" onPress={() => changeTheme('light')} />

      <Text>SecondScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
});
export default SecondScreen;
