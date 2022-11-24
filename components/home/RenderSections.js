import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
// import {profileData} from '../../constants/dummyData';
import * as Data from '../../constants/dummyData';

export const renderHeader = () => {
  const [profile, setProfile] = useState(Data.profileData);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
      }}>
      {/* greetings */}
      <View style={{flex: 1}}>
        <View style={{marginRight: 2}}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
          <Text style={{...FONTS.h2, color: COLORS.white}}>{profile.name}</Text>
        </View>
      </View>
      {/* points */}
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          height: 40,
          paddingLeft: 3,
          paddingRight: SIZES.radius,
          borderRadius: 20,
        }}
        onPress={() => console.log('point')}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              backgroundColor: 'rgba(0,0,0,0,5)',
            }}>
            <Image
              source={icons.claim}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </View>
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}>
            {profile.point}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.LightGray,
          borderWidth: 1,
        }}></View>
    </View>
  );
};
export const renderButtonSection = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding}}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          backgroundColor: COLORS.secondary,
          borderRadius: SIZES.radius,
        }}>
        {/* claim */}
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('claim')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.claim}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              claim
            </Text>
          </View>
        </TouchableOpacity>

        {/* divider */}
        <LineDivider />

        {/* get point */}
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('get point')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.point}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              Get Point
            </Text>
          </View>
        </TouchableOpacity>

        {/* divider */}
        <LineDivider />
        {/* my card */}
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('my card')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.card}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              My card
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const renderBookSection = myBooks => {
  const [myBook, setMyBook] = useState(myBooks);
  const renderItem = ({item, index}) => {
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: index == 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
        borderColor: COLORS.lightBlue,
      }}
      onPress={() => console.log('My Book')}>
      {/* bookCover */}
      {/* <Image
        source={item?.booksCover}
        resizeMode="cover"
        style={{width: 180, height: 250, borderRadius: 20}}
      /> */}
      {/* book info */}
      <Text>{item?.bookName}</Text>
      <Text style={{color: COLORS.white}}>hi hello</Text>
    </TouchableOpacity>;
  };
  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>My Books</Text>
        <TouchableOpacity onPress={() => console.log('see more')}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.LightGray,
              alignSelf: 'flex-start',
              textDecorationLine: 'underline',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>
      {/* books */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
          borderColor: COLORS.lightBlue,
        }}>
        <FlatList
          data={myBook}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
