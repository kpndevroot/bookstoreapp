import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, BookDetail, Notifications} from '../screens';
import {COLORS} from '../constants';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import icons from '../constants/icons';

const Tab = createBottomTabNavigator();

const tabOptions = {
  // showLabel: false,
  // style: {
  //   height: '10%',
  //   backgroundColor: COLORS.black,
  // },
  tabBarShowLabel: false,
  tabBarStyle: [
    {
      display: 'flex',
    },
    null,
  ],
};

const Tabs = () => {
  return (
    <Tab.Navigator
      // tabBarOptions={tabOptions}

      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          height: '10%',
          backgroundColor: COLORS.black,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.black : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, hight: 25}}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, hight: 25}}
                />
              );
            case 'Notification':
              return (
                <Image
                  source={icons.bookmarkFilled}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, hight: 25}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
export default Tabs;
