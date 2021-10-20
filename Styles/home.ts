import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 25,
      flexDirection: 'column',
      backgroundColor: '#000',
    },
    scrollViewContainer: {
      flexDirection: 'column',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    profileLogo: {
      width: 25,
      height: 25,
      borderRadius: 15,
      margin: 5,
    },
  });

export default styles;