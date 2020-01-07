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
      <Container>
        <Header hasTabs >
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate("Plan")}>
              <Icon name='arrow-back' >
              </Icon>
              <Text>Back</Text>
            </Button>
          </Left>          
          <Body>
            <Title>Plan 1</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Tabs >
          <Tab heading="Room">
            <Planroom />
          </Tab>
          <Tab heading="Graph">
            <Plangraph/>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}
export default Plandetail;
Plandetail.navigationOptions = {
    title: 'Plan 1',
};