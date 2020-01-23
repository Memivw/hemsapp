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

class Aboutapp extends Component {
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
            <Title style={{ color: "#fff", fontSize: 14 }}>About app</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginTop: 10
              }}
            >
              Version
            </Text>
            <Text
              style={{
                color: "#fff",
                marginLeft: 15,
                fontSize: 16,
                marginTop: 10
              }}
            >
              1.0.0
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Aboutapp;
