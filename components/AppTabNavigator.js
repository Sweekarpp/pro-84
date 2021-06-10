import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';
import FeedBackScreen from '../screens/FeedBackScreen'
import SearchScreen from '../screens/SearchScreen'
import HomeScreen from '../screens/HomeScreen'


export const AppTabNavigator = createBottomTabNavigator({

   Home: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Intro",
    }
  },

  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request",
    }
  },



  
    Search: {
    screen: SearchScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/search.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Search",
    }
  },

       Feedback: {
    screen: FeedBackScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/feedback.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Feedback",
    }
  },
});
