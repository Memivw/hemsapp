import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Tab,Tabs } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import Planroom from '../screens/Planroom';
import Plangraph from '../screens/Plangraph';
import PlanScreen from '../screens/PlanScreen';

const  PlanStack = createStackNavigator(
  {
    Plan:  PlanScreen,
  },
);
class Plandetail extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#152238'}}>
        <Header hasTabs style={{ backgroundColor: '#1c2e4a' }}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate("Plan")}>
              <Icon name='arrow-back' style={{ color: '#fff' }}>
              </Icon>
              <Text style={{ color: '#fff' }}>Back</Text>
            </Button>
          </Left>          
          <Body>
            <Title style={{ color: '#fff' }} >Plan 1</Title>
          </Body>
          <Right/>
      
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }} >
          <Tab heading="Room" tabStyle={{ backgroundColor: '#1c2e4a' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#1c2e4a' }} activeTextStyle={{ color: '#fff' }} >
            <Planroom />
          </Tab>
          <Tab heading="Graph" tabStyle={{backgroundColor: '#1c2e4a'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#1c2e4a'}} activeTextStyle={{color: '#fff'}}>
            <Plangraph/>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}
export default Plandetail;
