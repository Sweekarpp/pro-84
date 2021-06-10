import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home1 : {
    screen : AppTabNavigator
    },
  MyDonations : {
    screen : MyDonationScreen
  },
  Notification : {
    screen : NotificationScreen
  },
  Setting : {
    screen : SettingScreen
  },

   Search : {
    screen : SearchScreen
  },

     Home : {
    screen : HomeScreen
  }

  
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
