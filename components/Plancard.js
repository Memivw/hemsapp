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
import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper';//npm i react-native-paper
import { CardItem,Left,Body,Right,Icon} from 'native-base';
export default function Plancard() {
    return (
          <View style={{padding:10}} >
              <Card style={{elevation:2}} >
                <View >
                     <CardItem button onPress={() => {this.props.navigation.navigate('Plan')}}>
                      <Left>
                            <Body>
                                <Text>Plan 1</Text>
                                <Text style={{color:'green'}}>save 25%</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon name='ios-leaf'
                            size ={50}
                            />
                        </Right>
                 </CardItem>
                </View>
              </Card>
          </View>
          
  );
}
