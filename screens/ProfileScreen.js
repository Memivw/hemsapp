import * as React from 'react';

import {
  Text,
  View,
} from 'react-native';
import { CardItem, Left, Body, Switch, Right, Header, Button, Icon, Title, Container, Content, List, ListItem } from 'native-base';
class ProfileScreen extends React.Component {
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
            <Title style={{ color: '#fff' }}>Profile</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{ alignSelf: 'center',marginTop:20 }}>
            <Icon active name="md-contact" style={{ fontSize: 130, color: '#fff' }} />
            <Text style={{fontSize:20,color:'#fff'}}>Tony Stark</Text>
          </View>
        <View style={{marginTop:30}}>
          <List>
            <ListItem onPress={() => { this.props.navigation.navigate('Home') }}>
                <Left>
                  <Text style={{ color: '#fff'}}>Username</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff'}} name="arrow-forward" />
                </Right>
            </ListItem>
            <ListItem onPress={() => { props.navigation.navigate('Plan') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>Phone</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
            </ListItem>
            <ListItem onPress={() => { props.navigation.navigate('Device') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>E-mail</Text>
                </Left>
                <Right >
                  <Icon style={{ color: '#fff' }} name="arrow-forward" />
                </Right>
            </ListItem>
            <ListItem onPress={() => { props.navigation.navigate('Statistic') }}>
                <Left>
                  <Text style={{ color: '#fff' }}>Password</Text>
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
export default ProfileScreen;
