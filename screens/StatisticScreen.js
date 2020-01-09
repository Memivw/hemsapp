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
import Graph from './Graph';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Tab,Tabs } from 'native-base';

class StatisticScreen extends Component {
  render() {
    return (
      <Container>
       <Header hasTabs style={{backgroundColor:'#373759'}} >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}
              style={{color:'#fff'}}>
              </Icon>
            </Button>
          </Left>          
          <Body>
            <Title style={{color:'#fff'}}>Statistic</Title>
          </Body>     
          <Right></Right>
        </Header>
        <Tabs tabBarUnderlineStyle={ {backgroundColor: '#fff' }}>
          <Tab heading="Month" tabStyle={{backgroundColor: '#373759'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#373759'}} activeTextStyle={{color: '#fff'}}  >
            <Graph />
          </Tab>
          <Tab heading="Device" tabStyle={{backgroundColor: '#373759'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#373759'}} activeTextStyle={{color: '#fff'}}>
            <Graph/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default StatisticScreen;