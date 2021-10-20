import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from '../Styles/movieDetailsScreen';
import movies from '../Data/movie';
import movie from '../Data/movie';
import { MaterialIcons, FontAwesome, Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import EpisodeItem from '../components/EpisodeItem';

const MovieDetailsScreen = () => {
    // console.log(movies.seasons.items[0].episodes.items[0].poster)
    const firstEpisode = movies.seasons.items[0].episodes.items[0]
    return (
        <View style={styles.movieDetailsContainer}>
            <Image style = {styles.seasonPoster} source = {{uri: firstEpisode.poster}} />
            <ScrollView>
                <View style = {styles.infoContainer}>
                    <Text style = {styles.title}>{movie.title}</Text>
                    <View style = {styles.flexContainer}>
                        <Text style = { styles.match}>98% match</Text>
                        <Text style = { styles.year}>{movie.year}</Text>
                        <View style = {styles.ageContainer}>
                            <Text style = { styles.age}>12+</Text>
                        </View>
                        <Text style = { styles.year}>{movie.numberOfSeasons} Seasons</Text>
                        <MaterialIcons name="hd" size={24} color="#555" />
                    </View>
                    <TouchableOpacity>
                        <View style = {styles.playButton}>
                            <FontAwesome name="play" size={20} color="#000" />
                            <Text style = {styles.buttonText}>Play</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style = {styles.downloadButton}>
                            <MaterialIcons name="file-download" size={20} color="#fff" />
                            <Text style = {styles.downloadButtonText}>Download</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style = {styles.moviePlot}>{movie.plot}</Text>
                    <Text style = {styles.movieCast}>Cast: {movie.cast}</Text>
                    <Text style = {styles.movieCast}>Creator: {movie.creator}</Text>
                    <View style  = {styles.iconsContainer}>
                        <View style = {styles.iconContainer}>
                            <Ionicons style = {styles.icon} name="add" size={30} color="#fff" />
                            <Text style = {styles.iconText} >My List</Text>
                        </View>
                        <View style = {styles.iconContainer}>
                            <AntDesign style = {styles.rateIcon} name="like2" size={24} color="#fff" />
                            <Text style = {styles.iconText} >Rate</Text>
                        </View>
                        <View style = {styles.iconContainer}>
                            <Feather style = {styles.shareIcon} name="send" size={24} color="#fff" />
                            <Text style = {styles.iconText} >Share</Text>
                        </View>
                    </View>
                    <View style= {styles.episodesTextContainer}>
                        <Text style = {[styles.episodesText, styles.episodesText1]}>EPISODES</Text>
                        <Text style = {[styles.episodesText, styles.episodesText2]}>MORE LIKE THIS</Text>
                    </View>
                    <View style = {styles.seasonsTextContainer}>
                        <Text style = {styles.seasonsText}>Season1</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="#555" />
                    </View>
                    {/* <View>
                        <EpisodeItem episode = {firstEpisode} />
                    </View> */}
                    <FlatList
                        data = {movies.seasons.items[0].episodes.items}
                        renderItem = {({item}) => <EpisodeItem id = {item.id} episode = {item} />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default MovieDetailsScreen;
