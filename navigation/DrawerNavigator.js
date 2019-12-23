import React, { Component } from 'react';
import { Platform, Dimensions,Text,View,StyleSheet } from 'react-native';
import { createAppContainer,SafeAreaView} from 'react-navigation';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const width = Dimensions.get('window').width;
const DrawerConfig ={
    drawerWidth:width*0.83,
}

const MyDrawerNevigator = createDrawerNavigator(
    {
        Profile:  { screen: ProfileScreen },
        Setting: { screen :SettingsScreen},
    },

);
const Appcontainer =createAppContainer(MyDrawerNevigator);

export default class DrawerNavigator extends Component{
    render(){
        return <Appcontainer/>;
    }
}