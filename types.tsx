/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Home: undefined;
  MovieDetails: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  HomeStack: undefined;
  ComingSoon: undefined;
  Search: undefined;
  Download: undefined;
  MovieDetails: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type ListItemProps = {
  id: string,
  poster: string,
  navigations: any,
}
export type PopularType = {
  // content:{
  //   title: string,
  //   movies: string,
  // },
  content: object,
  navigation: any,
}

export type episodeItemTypes = {
  episode: {
    duration: string,
    id: string,
    plot: string,
    poster: string,
    title: string,
    video: string,
  },
  id: string,
}
