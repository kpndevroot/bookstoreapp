import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  renderHeader,
  renderButtonSection,
  renderBookSection,
} from '../components/home/RenderSections';
import {profileData, myBooksData} from '../constants/dummyData';

const Home = () => {
  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);

  // headerRender

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
        <View>{renderBookSection(myBooks)}</View>
        {/* category section */}
        <View></View>
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
