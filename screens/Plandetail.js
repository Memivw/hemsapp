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
import Planroom from '../screens/Planroom';
class Plandetail extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
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
            <Planroom/>
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