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
class Planroom extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <ScrollView>
        <View style={{padding:10}} >
            <Text>Living room</Text>
            <View style={{padding:10}} >
            <Card>
               <CardItem>
                  <Left>
                     <Icon name='ios-bulb'
                      type='ionicon' 
                      size ={50}
                      />
                     <Body>
                       <Text>Light</Text>
                       <Text note>total : 4 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                     <Body>
                       <Text> 08.00 - 12.00</Text>
                     </Body>
                   </Right>
                 </CardItem>
                 <CardItem>
                  <Left>
                     <Icon name='ios-outlet'
                      type='ionicon' 
                      size ={50}
                      />
                     <Body>
                       <Text>Plug</Text>
                       <Text note>total : 2 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                     <Body>
                       <Text> 08.00 - 12.00</Text>
                     </Body>
                   </Right>
                 </CardItem>
                 <CardItem>
                  <Left>
                     <Icon name='ios-outlet'
                      type='ionicon' 
                      size ={50}
                      />
                     <Body>
                       <Text>Plug 2</Text>
                       <Text note>total : 2 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                     <Body>
                       <Text> 08.00 - 12.00</Text>
                     </Body>
                   </Right>
                 </CardItem>
               </Card>
              </View>
            </View>

        </ScrollView>
         
      </View>
     );
  }
}
export default Planroom;
