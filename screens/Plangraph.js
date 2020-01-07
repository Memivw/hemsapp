import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
  } from 'react-native';
  import{Header,Left,Right,Body,CardItem} from 'native-base'
  import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper';//npm i react-native-paper
  import { Icon } from 'react-native-elements'
  import Graph from './Graph';
  class Plangraph extends Component {
    render(){
      return (
        <View style={{flex:1}}>
          <ScrollView>
           <View>
                <Graph/>
           </View>
          </ScrollView>
         
      </View>
     );
  }
}
export default Plangraph;
