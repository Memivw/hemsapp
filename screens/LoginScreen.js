import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { render } from 'react-dom';
class LoginScreen extends Component {
    render(){
        return(
        <View>
            <Text>Login Screen</Text>
            <Button title ="Go to the HomeScreen" 
            onPress = {()=>this.props.navigation.navigate('MaintabNavigator') } 
            />

        </View>
         );
    }
}
export default LoginScreen;