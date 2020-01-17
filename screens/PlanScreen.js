import * as React from 'react';

import {
  Text,
  View,
} from 'react-native';
import { Avatar, Card, Paragraph, IconButton } from 'react-native-paper';
import { CardItem, Left, Body, Switch, Right, Header, Button, Icon, Title, Container, Content } from 'native-base';
class PlanScreen extends React.Component {
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
            <Title style={{ color: '#fff' }}>Plan</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{ padding: 10 }} >
            <Card style={{ elevation: 2 }} >
              <View >
                <CardItem button onPress={() => { this.props.navigation.navigate('Plandetail') }} style={{ backgroundColor: '#1c2e4a'}}>
                  <Left>
                    <Body>
                      <Text style={{ color: '#fff' }}>Plan 1</Text>
                      <Text style={{ color: "#00CC99" }}>save 25%</Text>
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
