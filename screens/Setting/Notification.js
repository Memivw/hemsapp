import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Tab,
  Tabs,
  Content,
  Item,
  Input,
  Label
} from "native-base";

class Notification extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#152238" }}>
        <Header style={{ backgroundColor: "#1c2e4a" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Setting")}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }}></Icon>
              <Text style={{ color: "#fff" }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff", fontSize: 14 }}>
              Notification
            </Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Setting")}
            >
              <Text style={{ color: "#fff" }}>Done</Text>
            </Button>
          </Right>
        </Header>
        <Content>
        
        </Content>
      </Container>
    );
  }
}
export default Notification;
