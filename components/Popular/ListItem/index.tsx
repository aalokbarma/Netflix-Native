import React from 'react';
import { Image } from 'react-native';
import { ListItemProps } from '../../../types';
import styles from './style';

const ListItem = ({id, poster} : ListItemProps) => {
    return (
        <Image
        key = {id}
        style={styles.popularImage}
        source={{
          uri:
            poster,
        }}
      />
    )
}

export default ListItem;
