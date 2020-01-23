import * as React from 'react';

import { Text, TouchableOpacity, View, Modal,Alert,Dimensions } from "react-native";
import { CardItem, Left, Body, Switch, Right, Header, Button, Icon, Title, Container, Content, List, ListItem,Item,Input} from 'native-base';
const screenWidth = Dimensions.get("window").width - 60;
const screenHeight = Dimensions.get("window").height - 200;
class Roomsetting extends React.Component {
    constructor() {
    super();
    this.state = {
      showsetroom: false,
    };
}
  deleteroom = () => {
    Alert.alert(
      //title
      "Delete confirmation",
      //body
      "Are you sure to delete the room?",
      [
        { text: "Yes", onPress: () => console.log("Yes Pressed") },
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#152238" }}>
        <Header hasTabs style={{ backgroundColor: "#1c2e4a" }}>
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
            <Title style={{ color: "#fff" }}>Room setting</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={{ marginTop: 30 }}>
            <List>
              <ListItem>
                <Left>
                  <Text style={{ color: "#fff" }}>Livingroom</Text>
                </Left>
                <View style={{ flexDirection: "row" }}>
                  <Button
                    transparent
                    light
                    onPress={() => {
                      this.setState({ showsetroom: true });
                    }}
                  >
                    <Icon style={{ color: "#fff" }} name="ios-color-wand" />
                  </Button>
                  <Button transparent light onPress={this.deleteroom}>
                    <Icon style={{ color: "#fff" }} name="ios-trash" />
                  </Button>
                </View>
              </ListItem>
              <ListItem
                onPress={() => {
                  props.navigation.navigate("Plan");
                }}
              >
                <Left>
                  <Text style={{ color: "#fff" }}>Kitchen</Text>
                </Left>
                <View style={{ flexDirection: "row" }}>
                  <Button
                    transparent
                    light
                    onPress={() => {
                      this.setState({ showsetroom: true });
                    }}
                  >
                    <Icon style={{ color: "#fff" }} name="ios-color-wand" />
                  </Button>
                  <Button transparent light onPress={this.deleteroom}>
                    <Icon style={{ color: "#fff" }} name="ios-trash" />
                  </Button>
                </View>
              </ListItem>
              <ListItem
                onPress={() => {
                  props.navigation.navigate("Device");
                }}
              >
                <Left>
                  <Text style={{ color: "#fff" }}>Bedroom</Text>
                </Left>
                <View style={{ flexDirection: "row" }}>
                  <Button
                    transparent
                    light
                    onPress={() => {
                      this.setState({ showsetroom: true });
                    }}
                  >
                    <Icon style={{ color: "#fff" }} name="ios-color-wand" />
                  </Button>
                  <Button transparent light onPress={this.deleteroom}>
                    <Icon style={{ color: "#fff" }} name="ios-trash" />
                  </Button>
                </View>
              </ListItem>
              <ListItem
                onPress={() => {
                  props.navigation.navigate("Statistic");
                }}
              >
                <Left>
                  <Text style={{ color: "#fff" }}>Bedroom</Text>
                </Left>
                <View style={{ flexDirection: "row" }}>
                  <Button
                    transparent
                    light
                    onPress={() => {
                      this.setState({ showsetroom: true });
                    }}
                  >
                    <Icon style={{ color: "#fff" }} name="ios-color-wand" />
                  </Button>
                  <Button transparent light onPress={this.deleteroom}>
                    <Icon style={{ color: "#fff" }} name="ios-trash" />
                  </Button>
                </View>
              </ListItem>
            </List>
          </View>
          <Modal transparent={true} visible={this.state.showsetroom}>
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View
                style={{
                  marginTop: 100,
                  width: screenWidth,
                  height: screenHeight,
                  backgroundColor: "#1c2e4a",
                  borderRadius: 20,
                  alignSelf: "center"
                }}
              >
                <View style={{ alignItems: "flex-end", marginEnd: 10 }}>
                  <Button
                    transparent
                    style={{ height: 60 }}
                    onPress={() => {
                      this.setState({ showsetroom: false });
                    }}
                  >
                    <Icon
                      name="ios-close-circle"
                      style={{ fontSize: 40, color: "#666666", marginTop: 5 }}
                    />
                  </Button>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Icon
                    name="ios-bed"
                    style={{ fontSize: 200, color: "#CCFFFF" }}
                  />
                </View>
                <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }}>
                  Current name :
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    marginLeft: 20,
                    marginTop: 10
                  }}
                >
                  Living room
                </Text>
                <View style={{ alignItems: "center" }}>
                  <Item rounded style={{ width: 300, marginTop: 20 }}>
                    <Input
                      placeholder="New name"
                      style={{ color: "#fff", fontSize: 16 }}
                    />
                  </Item>
                  <Button
                    success
                    style={{
                      height: 50,
                      width: 100,
                      marginLeft: 15,
                      borderRadius: 15,
                      marginTop: 30
                    }}
                    onPress={() => alert("Change Name finish!")}
                  >
                    <Text
                      style={{ marginLeft: 25, color: "#fff", fontSize: 18 }}
                    >
                      Save
                    </Text>
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
export default Roomsetting;
