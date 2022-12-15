import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.LightGray2,
          borderWidth: 1,
        }}></View>
    </View>
  );
};
const BookDetail = ({route, navigation}) => {
  const [book, setBook] = useState(null);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);
  useEffect(() => {
    let {book} = route.params;
    setBook(book);
    console.log({book: book.bgColor});
  });

  // renderBookInfoSection function

  function renderBookInfoSection() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={book.booksCover}
          resizeMode="cover"
          style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}
        />
        {/* color overlay 39:47 */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: book.backgroundColor,
          }}></View>

        {/* navigation header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 50,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{...FONTS.h3, color: book.navTintColor}}>
              Book Detail
            </Text>
          </View>
          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => console.log('click more')}>
            <Image
              source={icons.more}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* book cover */}
        <View
          style={{flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'}}>
          <Image
            source={book.bookImage}
            resizeMode="contain"
            style={{flex: 1, width: 150, height: 'auto'}}
          />
        </View>

        {/* Book Name and author */}

        <View
          style={{
            flex: 1.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h2, color: book.navTintColor}}>
            {book.bookName}
          </Text>
          <Text style={{...FONTS.body3, color: book.navTintColor}}>
            {book.author}
          </Text>
        </View>

        {/* Book info */}

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/* rating */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.rating}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>rating</Text>
          </View>

          <LineDivider />

          {/* pages */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.radius,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.pageNo}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Pages</Text>
          </View>

          <LineDivider />

          {/* Languages */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.language}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Language</Text>
          </View>
        </View>
      </View>
    );
  }
  function renderDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;
    return (
      <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
        {/* custom Scrollbar */}
        <View
          style={{
            width: 4,
            height: '100%',
            backgroundColor: COLORS.gray1,
          }}>
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.LightGray4,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight,
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
        </View>

        {/* description */}
        <ScrollView
          contentContainerStyle={{paddingLeft: SIZES.padding2}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: indicator}}}],
            {useNativeDriver: false},
          )}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginTop: SIZES.padding,
            }}>
            Description
          </Text>
          <Text style={{...FONTS.body3, color: COLORS.LightGray}}>
            {book.description}
          </Text>
        </ScrollView>
      </View>
    );
  }
  function renderBottomButton() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {/* bookmark */}

        <TouchableOpacity
          style={{
            width: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('bookMark')}>
          <Image
            source={icons.bookmark}
            resizeMode="contain"
            style={{
              width: 24,
              height: 24,
              tintColor: COLORS.LightGray2,
            }}
          />
        </TouchableOpacity>

        {/* start Reading */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Start Reading..')}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (book) {
    return (
      <View style={styles.container}>
        {/* Book Cover Section */}
        <View style={{flex: 4}}>{renderBookInfoSection()}</View>
        {/* Description */}
        <View style={{flex: 2}}>{renderDescription()}</View>
        {/* Button */}
        <View style={{height: 70, marginBottom: 30}}>
          {renderBottomButton()}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
export default BookDetail;
