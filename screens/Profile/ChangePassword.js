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

class ChangePassword extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#152238" }}>
        <Header style={{ backgroundColor: "#1c2e4a" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }}></Icon>
              <Text style={{ color: "#fff" }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff", fontSize: 14 }}>Password</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Text style={{ color: "#fff" }}>Done</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ marginLeft: 20 }}>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label style={{ fontSize: 16, color: "#fff" }}>
                New Password
              </Label>
              <Input style={{ color: "#fff" }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label style={{ fontSize: 16, color: "#fff" }}>Confirm</Label>
              <Input style={{ color: "#fff" }} />
            </Item>
          </View>
        </Content>
      </Container>
    );
  }
}
export default ChangePassword;
