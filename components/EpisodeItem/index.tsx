import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import {episodeItemTypes} from '../../types';
import { MaterialIcons } from '@expo/vector-icons';

const EpisodeItem = ({episode, id}: episodeItemTypes) => {
    // console.log(episode)
    return (
        <View>
            <View style = {styles.mainContentContainer}>
                <View style = {styles.leftSection}>
                    <Image style = {styles.posterImage} source = {{uri: episode.poster}} />
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.titleText}>{episode.title}</Text>
                        <Text style = {styles.durationText}>{episode.duration}</Text>
                    </View>
                </View>
                <MaterialIcons style = {styles.downloadIcon} name="file-download" size={25} color="#fff" />
            </View>
            <Text style = {styles.plotText}>
                {episode.plot}
            </Text>
        </View>
    )
}

export default EpisodeItem;
