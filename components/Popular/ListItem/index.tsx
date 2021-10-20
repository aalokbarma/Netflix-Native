import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ListItemProps } from '../../../types';
import styles from './style';

const ListItem = ({id, poster, navigations} : ListItemProps) => {
    return (
      <TouchableOpacity onPress = {() => {
        navigations.navigate('MovieDetails')}}>
        <Image
        key = {id}
        style={styles.popularImage}
        source={{
          uri:
            poster,
        }}
      />
      </TouchableOpacity>
    )
}

export default ListItem;
