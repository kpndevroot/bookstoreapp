import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../constants';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.notification}
        resizeMode="contain"
        style={{tintColor: COLORS.LightGray, width: 50, hight: 50}}
      />
      <Text style={{fontSize: 25, color: COLORS.white}}>Notifications</Text>
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

export default Notifications;
