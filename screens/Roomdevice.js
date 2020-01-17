import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, Content, CardItem, Switch } from 'native-base';
import { Card } from 'react-native-paper';
import Carddevice from '../components/Carddevice';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width - 60;
const screenHeight = Dimensions.get("window").height - 170;

class Roomdevice extends Component {
  state = { switchValue: true }
  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value })
    //state changes according to switch
    //which will result in re-render the text
  }
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#152238' }}>
        <Header style={{ backgroundColor: '#1c2e4a' }} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name='arrow-back' style={{ color: '#fff' }} >
              </Icon>
              <Text style={{ color: '#fff' }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#fff' }}>BedRoom</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ marginTop: 5 }}>
          <View style={{ padding: 10, borderRadius: 25 }} >
            <Card style={{ elevation: 2 }} >
              <CardItem button onPress={() => { this.setState({ show: true }) }} style={{ backgroundColor: '#1c2e4a' }}>
                <Left>
                  <Icon name='ios-bulb'
                    style={{ fontSize: 50, color: "#ffa726" }}
                  />
                  <Body>
                    <Text style={{ color: '#fff' }}>Light</Text>
                    <Text note style={{ color: '#fff' }}>total : 4 hr</Text>
                  </Body>
                </Left>
                <Right>
                  <Switch onValueChange={this.toggleSwitch}
                    value={this.state.switchValue} />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={{ padding: 10, borderRadius: 25 }} >
            <Card style={{ elevation: 2 }} >
              <CardItem button onPress={() => { this.setState({ show: true }) }} style={{ backgroundColor: '#1c2e4a' }}>
                <Left>
                  <Icon name='ios-outlet'
                    style={{ fontSize: 50, color: "#CCFFFF" }}
                  />
                  <Body>
                    <Text style={{ color: '#fff' }}>Plug</Text>
                    <Text note style={{ color: '#fff' }}>total : 4 hr</Text>
                  </Body>
                </Left>
                <Right>
                  <Switch onValueChange={this.toggleSwitch}
                    value={this.state.switchValue} />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={{ padding: 10, borderRadius: 25 }} >
            <Card style={{ elevation: 2 }} >
              <CardItem button onPress={() => { this.setState({ show: true }) }} style={{ backgroundColor: '#1c2e4a' }}>
                <Left>
                  <Icon name='ios-outlet'
                    style={{ fontSize: 50, color: "#CCFFFF" }}
                  />
                  <Body>
                    <Text style={{ color: '#fff' }}>Plug</Text>
                    <Text note style={{ color: '#fff' }}>total : 4 hr</Text>
                  </Body>
                </Left>
                <Right>
                  <Switch onValueChange={this.toggleSwitch}
                    value={this.state.switchValue} />
                </Right>
              </CardItem>
            </Card>
          </View>
          
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Button rounded light style={{ height: 50, width: 180, alignItems: 'center' }} onPress={() => alert("Add device")} >
              <View style={{ alignItems: 'center', marginLeft: 20, color: ' #1c2e4a' }}>
                <Icon name='ios-add'>
                <Text style={{ fontSize: 18 }}>  Add device</Text>
              </Icon>
            </View>
            </Button>
          </View>


              <Modal
                transparent={true}
                visible={this.state.show}>
                <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                  <View style={{ marginTop: 100, width: screenWidth, height: screenHeight, backgroundColor: '#1c2e4a', borderRadius: 20, alignSelf: 'center' }} >
                    <View style={{ alignItems: 'flex-end', marginEnd: 10 }}>
                      <Button transparent style={{ height: 60 }} onPress={() => { this.setState({ show: false }) }} >
                        <Icon name='ios-close-circle'
                          style={{ fontSize: 40, color: "#666666", marginTop: 5 }}
                        />
                      </Button>
                    </View>
                    <View style={{ alignItems: 'center' }} >
                      <Icon name='ios-outlet'
                        style={{ fontSize: 200, color: "#CCFFFF" }}
                      />
                      <Text style={{ color: '#fff', fontSize: 22 }}>Plug</Text>

                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10, alignSelf: 'center' }}>
                      <Button bordered style={{ borderColor: '#FFF', height: 50, width: 160, marginLeft: 10, borderRadius: 15 }}>
                        <Text style={{ marginLeft: 30, color: '#fff' }}>total time: 4hr</Text>
                      </Button>
                      <Button bordered style={{ borderColor: '#FFF', height: 50, width: 160, marginLeft: 10, borderRadius: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#fff' }}>Amount usage : 120</Text>
                      </Button>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 50, marginTop: 5, alignItems: 'center' }}>
                      <Icon name='ios-time'
                        style={{ fontSize: 30, color: "#CCFFFF" }}
                      />
                      <Text style={{ color: '#fff', marginLeft: 5 }}> set timer </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 50, marginTop: 5, alignItems: 'center' }}>
                      <Icon name='ios-calendar'
                        style={{ fontSize: 30, color: "#CCFFFF" }}
                      />
                      <Text style={{ color: '#fff', marginLeft: 5 }}> Schedule </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 50, marginTop: 5, alignItems: 'center' }}>
                      <Icon name='ios-stats'
                        style={{ fontSize: 30, color: "#CCFFFF" }}
                      />
                      <Text style={{ color: '#fff', marginLeft: 5 }}> Statistic </Text>
                    </View>
                    <View style={{ alignItems: 'center' }} >
                      <Button success style={{ height: 50, width: 150, marginLeft: 15, borderRadius: 15 }} onPress={() => alert("Turn on device")}>
                        <Text style={{ marginLeft: 40, color: '#fff', fontSize: 18 }} >Turn on</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Modal>
                </Content>

            </Container>
          );
      }
  }
  export default Roomdevice;
