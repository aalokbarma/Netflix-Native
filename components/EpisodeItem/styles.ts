import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingRight: 15,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 5,
    },
    posterImage: {
        height: 75,
        aspectRatio: 16/9,
        marginRight: 10,
    },
    titleContainer: {

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
    durationText: {
        fontSize: 13,
        color: '#555',
    },
    plotText: {
        fontSize: 13,
        color: '#888',
    },
    downloadIcon: {
    
    },
});

export default styles;