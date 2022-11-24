import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, color: COLORS.black}}>Notifications</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Notifications;
