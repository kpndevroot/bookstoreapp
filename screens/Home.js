import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  renderHeader,
  renderButtonSection,
  renderMyBookSection,
  renderCategoryHeader,
} from '../components/home/RenderSections';
import {profileData, myBooksData, categoriesData} from '../constants/dummyData';

const Home = ({navigation}) => {
  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  function renderCategoryData() {
    var books = [];
    let selectedCategoryBooks = categories.filter(
      a => a.id == selectedCategory,
    );
    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }
    const renderItem = ({item}) => {
      return (
        <View style={{marginVertical: SIZES.base}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() => console.log('category data')}>
            {/* book cover */}
            <Image
              source={item.booksCover}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />

            <View style={{flex: 1, marginLeft: SIZES.radius}}>
              {/* book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}>
                  {item.bookName}
                </Text>
                <Text style={{...FONTS.h3, color: COLORS.lightGray}}>
                  {item.author}
                </Text>
              </View>
              {/* book info */}
              <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                <Image
                  source={icons.page}
                  resizeMode="contain"
                  style={{width: 20, height: 20, tintColor: COLORS.LightGray}}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.LightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </Text>
              </View>
              {/* Genre */}
              <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Business') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Business
                    </Text>
                  </View>
                )}
                {item.genre.includes('politics') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                      Politics
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* bookmark */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 5,
              right: 15,
            }}
            onPress={() => console.log('bookmark')}>
            <Image
              source={icons.bookmark}
              resizeMode="contain"
              style={{width: 25, height: 25, tintColor: COLORS.LightGray}}
            />
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding,
        }}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header section */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/*  body section*/}
      <ScrollView style={{marginTop: SIZES.radius}}>
        {/* books section */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* category section */}
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader(categories)}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
export default Home;
