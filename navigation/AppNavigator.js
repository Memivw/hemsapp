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
    navigationOptions: navOptionHandler,
  },
  Setting :
  {
    screen:SettingsScreen,
    navigationOptions: navOptionHandler,
  },
  Plandetail :
  {
    screen:Plandetail,
    navigationOptions:navOptionHandler,
  },
  Roomdevice :
  {
    screen: Roomdevice,
    navigationOptions: navOptionHandler,
  },
  Setdevice :
  {
    screen: Setdevice,
    navigationOptions: navOptionHandler,
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

