import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({
    movieDetailsContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#000',
    },
    seasonPoster: {
        width: '100%',
        aspectRatio: 5/3,
        resizeMode: 'cover',
    },
    infoContainer: {
        paddingLeft: 12,
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    flexContainer: {
        flexDirection: 'row',
        width: 275,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    match: {
        color: '#00aa00',
        fontWeight: 'bold',
        marginRight: 10,
    },
    year: {
        color: '#555',
    },
    ageContainer: {
        backgroundColor: '#e1ad01',
        borderRadius: 5,
    },
    age: {
        marginVertical: 2,
        marginHorizontal: 5,
        color: '#000',
        fontWeight: '600',
    },
    playButton: {
       flexDirection: 'row',
       backgroundColor: '#fff',
       width: '98%',
       borderRadius: 2,
       marginVertical: 5,
       padding: 7,
       alignItems: 'center',
       justifyContent: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 17,
        marginHorizontal: 7,
    },
    downloadButton: {
       flexDirection: 'row',
       backgroundColor: '#555',
       width: '98%',
       borderRadius: 2,
       marginVertical: 5,
       padding: 7,
       alignItems: 'center',
       justifyContent: 'center',
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 17,
        marginHorizontal: 7,
    },
    moviePlot: {
        marginVertical: 10,
        fontSize: 13,
        color: '#fff',
    },
    movieCast: {
        fontSize: 13,
        color: '#555',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        marginBottom: 25,
    },
    iconContainer: {
        flexDirection: 'column',
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    icon: {
        padding: 5,
        fontWeight: '100',
    },
    rateIcon: {
        padding: 8,
        fontWeight: '100',
    },
    shareIcon: {
        padding: 8,
        fontWeight: '100',
    },
    iconText: {
        color: '#555',
    },
    episodesTextContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    episodesText:{
        fontSize: 18,
        color: '#fff',
        marginRight: 20,
        paddingVertical: 10,
    },
    episodesText1:{
        fontWeight: 'bold',
        borderTopColor: 'orange',
        borderTopWidth: 3,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
    },
    episodesText2:{
        fontWeight: 'normal',
    },
    seasonsTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seasonsText: {
        color: '#555',
    },
    seasonsDropdown: {
        width: 130,
        color: '#555',
    },
    scrollViewContainer:{
        flexDirection: 'column',
    },
});

export default styles;