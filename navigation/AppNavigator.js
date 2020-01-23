import { Platform, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginScreen  from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { SideMenu } from './SideMenu';
import Plandetail from '../screens/Plandetail';
import Roomdevice from '../screens/Roomdevice';
import Setdevice from '../screens/Setdevice';
import Roomsetting from '../screens/Roomsetting';
import Username from "../screens/Profile/Username";
import ChangePhone from "../screens/Profile/ChangePhone";
import ChangePassword from "../screens/Profile/ChangePassword";
import Notification from "../screens/Setting/Notification";
import Aboutapp from "../screens/Setting/Aboutapp";
const navOptionHandler = (navigation) => ({
  header:null
})
const MainStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: navOptionHandler
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: navOptionHandler
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: navOptionHandler
    },
    Setting: {
      screen: SettingsScreen,
      navigationOptions: navOptionHandler
    },
    Plandetail: {
      screen: Plandetail,
      navigationOptions: navOptionHandler
    },
    Roomdevice: {
      screen: Roomdevice,
      navigationOptions: navOptionHandler
    },
    Setdevice: {
      screen: Setdevice,
      navigationOptions: navOptionHandler
    },
    Roomsetting: {
      screen: Roomsetting,
      navigationOptions: navOptionHandler
    },
    Username: {
      screen: Username,
      navigationOptions: navOptionHandler
    },
    ChangePhone: {
      screen: ChangePhone,
      navigationOptions: navOptionHandler
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: navOptionHandler
    },
    Notification: {
      screen: Notification,
      navigationOptions: navOptionHandler
    },
    Aboutapp: {
      screen: Aboutapp,
      navigationOptions: navOptionHandler
    }
  },
  { initialRouteName: "Main" }
);



const appDrawer = createDrawerNavigator(
  {
    drawer:MainStack,
  },
  {
    contentComponent:SideMenu,
    drawerWidth:Dimensions.get('window').width*3/4
  }
)
const MainApp = createSwitchNavigator({
   // Login: LoginStack,
    app:appDrawer,
  },
  {
    initialRouteName: 'app',
  })

export default createAppContainer(MainApp);

