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
import Statsmonth from '../screens/Statsmonth';
import Statsdevice from '../screens/Statsdevice';
class StatisticScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#1c2e4a" }}>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
                style={{ color: "#fff" }}
              ></Icon>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Statistic</Title>
          </Body>
          <Right></Right>
        </Header>
        <Statsdevice />
      </Container>
    );
  }
}
export default StatisticScreen;