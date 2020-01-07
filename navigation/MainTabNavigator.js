import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PlanScreen from '../screens/PlanScreen';
import DeviceScreen from '../screens/DeviceScreen';
import StatisticScreen from '../screens/StatisticScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';

const  PlanStack = createStackNavigator(
  {
    Plan:  PlanScreen,
  },
  config
);

PlanStack.navigationOptions = {
  tabBarLabel: ' Plan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pie' : 'md-pie'} />
  ),
};

PlanStack.path = '';

const DeviceStack = createStackNavigator(
  {
    Device: DeviceScreen,
  },
  config
);

DeviceStack.navigationOptions = {
  tabBarLabel: 'Device',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-outlet' : 'md-outlet'} />
  ),
};

DeviceStack.path = '';
const StatisticStack = createStackNavigator(
  {
    Statistic: StatisticScreen,
  },
  config
);

StatisticStack.navigationOptions = {
  tabBarLabel: 'Statistic',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'}
    
    />
  ),
};

StatisticStack.path = '';
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PlanStack,
  DeviceStack,
  StatisticStack,
});

tabNavigator.path = '';

export default tabNavigator;
