import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import {  Left, Right, Body, CardItem, Container, Icon,Content } from 'native-base'
import {  Card } from 'react-native-paper';//npm i react-native-paper

import Graph from './Graph';
class Plangraph extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#152238' }}>
      <Content>
        <View style={{ marginTop: 10 }}>
          <Graph />
          <View style={{ flexDirection: 'row',alignSelf:'center',marginTop:10 }}>
            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 90, width: Dimensions.get("window").width / 3, marginLeft: 10 }}>
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: "#fff" }} >ปริมาณไฟที่ใช้</Text>
                <Text style={{ fontSize: 16, color: "#fff" }} >200 W</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 90, width: Dimensions.get("window").width / 3, marginLeft: 10 }}>
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: "#fff" }} >ค่าไฟ ณ ปัจจุบัน</Text>
                <Text style={{ fontSize: 16, color: "#fff" }} >1400 บ.</Text>
              </View>
            </View>
          </View>
          <View style={{padding:10}} >
              <Text style={{ fontSize: 18,color: "#fff"}}>Summerize</Text>
            <View style={{padding:10 }} >
                <Card style={{ backgroundColor: '#1c2e4a', borderRadius:20 }}>
                  <CardItem style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                  <Left>
                     <Icon name='ios-bulb'
                      size ={50}
                      style={{ color: '#ffa726'}}
                      />
                     <Body>
                       <Text style={{fontSize: 14 , color: '#fff'}}>Light</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name='md-time' style={{ fontSize: 15, color: '#fff' ,marginTop:3}} />
                          <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                        </View>
                       
                       </Body>
                   </Left>
                   <Right>
                      <Text style={{fontSize: 14 , color: "#fff" }} >ปริมาณไฟที่ใช้ 200 w</Text>
                   </Right>
                 </CardItem>
                  <CardItem style={{ backgroundColor: '#1c2e4a' }}>
                  <Left>
                     <Icon name='ios-outlet'         
                      size ={50}
                       style={{ color: '#CCFFFF'}}
                      />
                     <Body>
                       <Text style={{fontSize: 14 , color: '#fff'}}>Plug</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                          <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                        </View>
                       </Body>
                   </Left>
                   <Right>
                      <Text style={{ fontSize: 14 , color: "#fff" }} >ปริมาณไฟที่ใช้ 200 w</Text>
                   </Right>
                 </CardItem>
                  <CardItem style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                  <Left>
                     <Icon name='ios-outlet' 
                      size ={50}
                       style={{ color: '#CCFFFF'}}
                      />
                     <Body>
                       <Text style={{ fontSize: 14 ,color: '#fff'}}>Plug 2</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                          <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                        </View>
                       </Body>
                   </Left>
                   <Right>
                     <Text style={ {fontSize: 14 ,color: "#fff" }} >ปริมาณไฟที่ใช้ 200 w</Text>
                   </Right>
                 </CardItem>
               </Card>
              </View>
            </View>
        </View>
        </Content>
      </Container>
    );
  }
}
export default Plangraph;
