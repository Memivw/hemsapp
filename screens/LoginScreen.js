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
import { render } from 'react-dom';
import {
  Icon,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from "native-base";
class LoginScreen extends Component {
    render(){
        return (
          <Container style={{ backgroundColor: "#1c2e4a" }}>
            <View style={{ alignItems: "center", marginTop: 150 }}>
              <View style={{ alignItems: "center" }}>
                <Icon
                  name="md-partly-sunny"
                  style={{ fontSize: 150, color: "#CCFFFF" }}
                />
              </View>
              <Form>
                <Item floatingLabel style={{ width: 200 }}>
                  <Label>Username</Label>
                  <Input />
                </Item>

                <Item floatingLabel style={{ width: 200 }}>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Home")}
                style={{
                  marginTop: 40,
                  width: 100,
                  backgroundColor: "#152238"
                }}
              >
                <Text style={{ color: "#fff", marginLeft: 30 }}>Login</Text>
              </Button>
            </View>
          </Container>
        );
    }
}
export default LoginScreen;