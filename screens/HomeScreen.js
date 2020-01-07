import React, { Component } from "react";
import {
  Text,
} from "react-native";
import {
  Header,
  Left,
  Right,
  Body,
  CardItem,
  Container,
  Button,
  Content,
  Icon, Card, View
} from "native-base";
//import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper';//npm i react-native-paper
import { Dimensions } from "react-native";
import Graph from './Graph';
class HomeScreen extends Component {
  render() {
    return (
      <Container >
        <Content>
        <View style={{marginTop:20,marginLeft:50,marginRight:50}}>
           <Graph/>
        </View>
          <Text>Recent</Text>
          <Content horizontal>
            <Card style={{ height: 150, width: Dimensions.get("window").width / 3 }}>
            <CardItem >
                <View>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 }} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 18 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 60 }} />
                  <Text style={{ fontSize: 12 }} >Bedroom</Text>
                </View>
              </CardItem>
            </Card>
            <Card style={{ height: 150, width: Dimensions.get("window").width / 3 }}>
            <CardItem >
                <View>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 }} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 18 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 60 }} />
                  <Text style={{ fontSize: 12 }} >Bedroom</Text>
                </View>
              </CardItem>
            </Card>
            <Card style={{ height: 150, width: Dimensions.get("window").width / 3 }}>
            <CardItem >
                <View>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 }} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 18 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 60 }} />
                  <Text style={{ fontSize: 12 }} >Bedroom</Text>
                </View>
              </CardItem>
            </Card>
            <Card style={{ height: 150, width: Dimensions.get("window").width / 3 }}>
            <CardItem >
                <View>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 }} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 18 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 60 }} />
                  <Text style={{ fontSize: 12 }} >Bedroom</Text>
                </View>
              </CardItem>
            </Card>
          </Content>

          <Text>Room</Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Card style={{ height: 200, width: Dimensions.get("window").width / 2 }}>
              <CardItem >
                <View>
               
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 20 }} >
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 20 }}>
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  
                     <Icon active name="ios-bed" style={{ fontSize: 80 }} />
                     <Text style={{ fontSize: 20 }} >Bedroom</Text>
                  
                </View>
              </CardItem>
            </Card>
            <Card style={{ height: 200, width: Dimensions.get("window").width / 2 }}>
              <CardItem >
                <View>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 20 }} >
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 20 }}>
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 80 }} />
                  <Text style={{ fontSize: 20 }} >Bedroom</Text>
                </View>
              </CardItem>
            </Card>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Card style={{ height: 200, width: Dimensions.get("window").width / 2 }}>
              <CardItem >
                <View >
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 20 }} >
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 20 }}>
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 80 }} />
                  <Text style={{ fontSize: 20 }} >Bedroom</Text>

                </View>
              </CardItem>
            </Card>
            <Card style={{ height: 200, width: Dimensions.get("window").width / 2 }}>
              <CardItem >
                <View>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 20 }} >
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color: "green", fontSize: 20 }}>
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-bed" style={{ fontSize: 80 }} />
                  <Text style={{ fontSize: 20 }} >Bedroom</Text>
                </View>
              </CardItem>
            </Card>
          </View>
          
        </Content>
      </Container>
    );
  }
}
export default HomeScreen;
HomeScreen.navigationOptions = {
  title: "Home"
};
