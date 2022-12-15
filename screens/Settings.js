import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../constants';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.settings}
        resizeMode="contain"
        style={{tintColor: COLORS.LightGray, width: 50, hight: 50}}
      />
      <Text style={{fontSize: 25, color: COLORS.white}}>Settings</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
});

export default Settings;
