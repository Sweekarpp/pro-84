import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';
import HomeScreen  from '../screens/HomeScreen';




export const AppStackNavigator = createStackNavigator({

    HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }

  
},
  {
    initialRouteName: 'BookDonateList'
  }
);
