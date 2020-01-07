import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import{Header,Left,Right,Body,CardItem} from 'native-base'
import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper';//npm i react-native-paper
import { Icon } from 'react-native-elements'
class HomeScreen extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        
        <ScrollView>
          <View >
            <Text>Home Screen</Text>
          </View>
        </ScrollView>
         
      </View>
     );
  }
}
export default HomeScreen;
HomeScreen.navigationOptions = {
    title: 'Home',
};