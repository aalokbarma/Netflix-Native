import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';
import styles from './style';
import { PopularType } from '../../types';

const Popular = ({content, navigation}: PopularType) => {


    return (
        <View style = {styles.popularContainer}>
            <Text style = {styles.heading}>{content.title}</Text>
            <FlatList
                data ={content.movies}
                renderItem={({item}) => <ListItem id = {item.id} poster = {item.poster} navigations = {navigation}/>}
                keyExtractor={item => item.id}
                horizontal = {true}
            />
        </View>
    )
}

export default Popular;
