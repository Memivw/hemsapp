import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import LoginScreen  from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import SideMenu from '../screens/SideMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const navOptionHandler = (navigation) => ({
  header:null
})
const MainStack = createStackNavigator({
  Home :
  {
    screen: MainTabNavigator,
    navigationOptions:navOptionHandler,
  },
  Profile :
  {
    screen:ProfileScreen,
    navigationOptions:navOptionHandler,
  },
  Setting :
  {
    screen:SettingsScreen,
    navigationOptions:navOptionHandler,
  },
},{initialRouteName:'Home'})

const appDrawer = createDrawerNavigator(
  {
    drawer:MainStack
  },
  {
    contentComponent:SideMenu,
    drawerWidth:Dimensions.get('window').width*3/4
  }
)
const MainApp = createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

   // Login: LoginStack,

    app:appDrawer,
  },
  {
    initialRouteName: 'app',
  })

export default createAppContainer(MainApp);

