import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import {episodeItemTypes} from '../../types';
import { MaterialIcons } from '@expo/vector-icons';
// import { Picker } from '@react-native-community/picker'
// import { Dropdown } from 'react-native-material-dropdown';

const EpisodeItem = ({episode, id}: episodeItemTypes) => {

    // const [user, setUser] = useState('')

    // const selectedelement = () => {
        
    // }
    // const updateUser = (user: string) => {
    //     setUser(user)
    //  }
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
            {/* <Picker selectedValue = {user} onValueChange = {updateUser}>
                <Picker.Item label = "Season 1" value = "season1" />
                <Picker.Item label = "Season 2" value = "season2" />
            </Picker> */}
        </View>
    )
}

export default EpisodeItem;
