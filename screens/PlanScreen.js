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
import { Avatar, Button, Card, Paragraph, IconButton } from 'react-native-paper';//npm i react-native-paper
import Plancard from '../components/Plancard';
import { CardItem, Left, Body, Right, Container, Content, Header, Title, Icon } from 'native-base';
class PlanScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#0A0A3E' }}>

        <Header hasTabs style={{ backgroundColor: '#373759' }} >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}
                style={{ color: '#fff' }}>
              </Icon>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#fff' }}>Plan</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{ padding: 10 }} >
            <Card style={{ elevation: 2 }} >
              <View >
                <CardItem button onPress={() => { this.props.navigation.navigate('Plandetail') }}>
                  <Left>
                    <Body>
                      <Text>Plan 1</Text>
                      <Text style={{ color: 'green' }}>save 25%</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon name='ios-flame' style={{ fontSize: 50 }}></Icon>
                  </Right>
                </CardItem>
              </View>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}
export default PlanScreen;
PlanScreen.navigationOptions = {
  title: 'Plan',
};