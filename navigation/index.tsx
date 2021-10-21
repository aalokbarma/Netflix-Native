/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, MaterialIcons, Ionicons, FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import SearchScreen from '../screens/SearchScreen';
import DownloadScreen from '../screens/DownloadScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import styles from '../Styles/home';
// import logo from '../assets/images/cloneDecoded.jpg';
import { Auth } from 'aws-amplify';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<RootStackParamList>();

function HomeScreenStack() {
  const colorScheme = useColorScheme();
  const onLogOut = () => {
    Auth.signOut();
  }
  return(
    <HomeStack.Navigator
    >
      <HomeStack.Screen name="Home"
      component={HomeScreen}
      options={({ navigation }: RootTabScreenProps<'Home'>) => ({
        title: 'Home',
        headerShown: false,
        tabBarIcon: () => <AntDesign name="home" size={24} color= '#E50914' />,
      })} />
      <HomeStack.Screen name ="MovieDetails"
      component={MovieDetailsScreen}
      options={({ navigation }: RootTabScreenProps<'MovieDetails'>) => ({
        title: '',
        headerRight: () => (
          <>
            <Feather style = {{margin: 5,}} name="cast" size={25} color= '#ffffff' />
            {/* <MaterialIcons name="live-tv" size={30} color= '#ffffff' /> */}
            <Pressable onPress = {onLogOut}>
              <Image style = {styles.profileLogo} source = {require('../assets/images/cloneDecoded.jpg')} />
            </Pressable>
          </>
        ),
        tabBarIcon: () => <AntDesign name="home" size={24} color= '#E50914' />,
      })} />
    </HomeStack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeScreenStack}
        options={({ navigation }: RootTabScreenProps<'HomeStack'>) => ({
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color= { color } />,
        })}
      />
      <BottomTab.Screen
        name="ComingSoon"
        component={ComingSoonScreen}
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color= { color } />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color= { color } />,
        }}
      />
      <BottomTab.Screen
        name="Download"
        component={DownloadScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => <MaterialIcons name="file-download" size={24} color= { color } />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
