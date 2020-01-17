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
import { Icon, Container, Content } from 'native-base';
class LoginScreen extends Component {
    render(){
        return(
            <Container>
        <View style={{alignItems:'center'}}>
            <Text>Login Screen</Text>
            <Button title ="Go to the HomeScreen" 
            onPress = {()=>this.props.navigation.navigate('Home') } 
            />
        </View>
        </Container>
         );
    }
}
export default LoginScreen;