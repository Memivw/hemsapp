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
const navOptionHandler = (navigation) => ({
  header:null
})
const MainStack = createStackNavigator({
  Main :
  {
    screen: MainTabNavigator,
    navigationOptions:navOptionHandler,
  },
  Profile :
  {
    screen:ProfileScreen,
  },
  Setting :
  {
    screen:SettingsScreen,
  },
  Plandetail :
  {
    screen:Plandetail,
    navigationOptions:navOptionHandler,
  }
},{initialRouteName:'Main',
  }
)



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

