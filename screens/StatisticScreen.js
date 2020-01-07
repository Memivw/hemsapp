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
       <Header hasTabs >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}>
              </Icon>
            </Button>
          </Left>          
          <Body>
            <Title>Statistic</Title>
          </Body>     
          <Right></Right>
        </Header>
        <Tabs >
          <Tab heading="Month">
            <Graph />
          </Tab>
          <Tab heading="Device">
            <Graph/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default StatisticScreen;