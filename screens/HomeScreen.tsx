import * as React from 'react';
import styles from '../Styles/home';

import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import Popular from '../components/Popular';
import categories from '../Data/categories';

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <Popular content = {categories.items[0]} navigation = {navigation} />
        <Popular content = {categories.items[1]} navigation = {navigation} />
        <Popular content = {categories.items[2]} navigation = {navigation} />
        <Popular content = {categories.items[3]} navigation = {navigation} />
        <Popular content = {categories.items[4]} navigation = {navigation} />
      </ScrollView>
      {/* <FlatList
          data ={categories.items}
          renderItem={({item}) => <Popular id = {item.id} content = {item} />}
          keyExtractor={item => item.id}
      /> */}
    </View>
  );
}

export default HomeScreen;