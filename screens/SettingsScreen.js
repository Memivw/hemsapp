import * as React from 'react';

import {
  Text,
  View,
} from 'react-native';
import { Avatar, Card, Paragraph, IconButton } from 'react-native-paper';
import { CardItem, Left, Body, Switch, Right, Header, Button, Icon, Title, Container, Content,List,ListItem } from 'native-base';
class SettingScreen extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#152238' }}>
        <Header hasTabs style={{ backgroundColor: '#1c2e4a' }} >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}
                style={{ color: '#fff' }}>
              </Icon>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#fff' }}>Setting</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{ alignSelf: 'center', marginTop: 20 }}>
            <Icon active name="ios-settings" style={{ fontSize: 130, color: '#fff' }} />
          </View>
          <View style={{ marginTop: 30 }}>
            <List>
              <ListItem onPress={() => { this.props.navigation.navigate('Roomsetting') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>Room setting</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => { this.props.navigation.navigate('Home') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>Notifications</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => { props.navigation.navigate('Plan') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>Location</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => { props.navigation.navigate('Device') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>Personalization and data</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => { props.navigation.navigate('Statistic') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>About app</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </View>
        </Content>

      </Container>
    );
  }
}
export default SettingScreen;
