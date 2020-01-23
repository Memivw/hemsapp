import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, CardItem, Switch,Item,Input,Form,Picker } from 'native-base';
import { Card } from 'react-native-paper';
import { Dimensions } from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker';
import Graph from "./Graph";
const screenWidth = Dimensions.get("window").width - 60;
const screenHeight = Dimensions.get("window").height - 150;
import moment from 'moment'
class Roomdevice extends Component {
  state = { switchValue: true };
  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };
  constructor() {
    super();
    this.state = {
      showsetdevice: false,
      showadddevice: false,
      showstats:false,
      isVisible_settime: false,
      isVisible_schedulestart: false,
      isVisible_scheduleend: false,
      chosenDate: "",
      chosenDatetime_start: "",
      chosenDatetime_end: "",
      typedevice: undefined
    };
  }
  showPicker_settime = () => {
    this.setState({
      isVisible_settime: true
    });
  };
  showPicker_schedulestart = () => {
    this.setState({
      isVisible_schedulestart: true
    });
  };
  showPicker_scheduleend = () => {
    this.setState({
      isVisible_scheduleend: true
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible_settime: false,
      isVisible_schedulestart: false,
      isVisible_scheduleend: false
    });
  };
  handlePicker_settime = datetime => {
    this.setState({
      isVisible_settime: false,
      chosenDate: moment(datetime).format("MMMM Do YYYY ")
    });
  };
  handlePicker_schedulestart = datetime => {
    this.setState({
      isVisible_schedulestart: false,
      chosenDatetime_start: moment(datetime).format("MMMM Do YYYY HH:mm")
    });
  };
  handlePicker_scheduleend = datetime => {
    this.setState({
      isVisible_scheduleend: false,
      chosenDatetime_end: moment(datetime).format("MMMM Do YYYY HH:mm")
    });
  };
  onValueChange(value: string) {
    this.setState({
      typedevice: value
    });
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#152238" }}>
        <Header style={{ backgroundColor: "#1c2e4a" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }}></Icon>
              <Text style={{ color: "#fff" }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>BedRoom</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ marginTop: 5 }}>
          <View style={{ padding: 10, borderRadius: 25 }}>
            <Card style={{ elevation: 2 }}>
              <CardItem
                button
                onPress={() => {
                  this.setState({ showsetdevice: true });
                }}
                style={{ backgroundColor: "#1c2e4a" }}
              >
                <Left>
                  <Icon
                    name="ios-bulb"
                    style={{ fontSize: 50, color: "#ffa726" }}
                  />
                  <Body>
                    <Text style={{ color: "#fff" }}>Light</Text>
                    <Text note style={{ color: "#fff" }}>
                      total : 4 hr
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Switch
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                  />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={{ padding: 10, borderRadius: 25 }}>
            <Card style={{ elevation: 2 }}>
              <CardItem
                button
                onPress={() => {
                  this.setState({ showsetdevice: true });
                }}
                style={{ backgroundColor: "#1c2e4a" }}
              >
                <Left>
                  <Icon
                    name="ios-outlet"
                    style={{ fontSize: 50, color: "#CCFFFF" }}
                  />
                  <Body>
                    <Text style={{ color: "#fff" }}>Plug</Text>
                    <Text note style={{ color: "#fff" }}>
                      total : 4 hr
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Switch
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                  />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={{ padding: 10, borderRadius: 25 }}>
            <Card style={{ elevation: 2 }}>
              <CardItem
                button
                onPress={() => {
                  this.setState({ showsetdevice: true });
                }}
                style={{ backgroundColor: "#1c2e4a" }}
              >
                <Left>
                  <Icon
                    name="ios-outlet"
                    style={{ fontSize: 50, color: "#CCFFFF" }}
                  />
                  <Body>
                    <Text style={{ color: "#fff" }}>Plug</Text>
                    <Text note style={{ color: "#fff" }}>
                      total : 4 hr
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Switch
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                  />
                </Right>
              </CardItem>
            </Card>
          </View>

          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Button
              rounded
              light
              style={{ height: 50, width: 180, alignItems: "center" }}
              onPress={() => {
                this.setState({ showadddevice: true });
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginLeft: 20,
                  color: " #1c2e4a"
                }}
              >
                <Icon name="ios-add">
                  <Text style={{ fontSize: 18 }}> Add device</Text>
                </Icon>
              </View>
            </Button>
          </View>

          <Modal transparent={true} visible={this.state.showsetdevice}>
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
                      this.setState({ showsetdevice: false });
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
                    name="ios-outlet"
                    style={{ fontSize: 200, color: "#CCFFFF" }}
                  />
                  <Text style={{ color: "#fff", fontSize: 22 }}>Plug</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignSelf: "center"
                  }}
                >
                  <Button
                    bordered
                    style={{
                      borderColor: "#FFF",
                      height: 50,
                      width: 160,
                      marginLeft: 10,
                      borderRadius: 15
                    }}
                  >
                    <Text style={{ marginLeft: 30, color: "#fff" }}>
                      total time: 4hr
                    </Text>
                  </Button>
                  <Button
                    bordered
                    style={{
                      borderColor: "#FFF",
                      height: 50,
                      width: 160,
                      marginLeft: 10,
                      borderRadius: 15
                    }}
                  >
                    <Text style={{ marginLeft: 10, color: "#fff" }}>
                      Amount usage : 120
                    </Text>
                  </Button>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Button transparent light onPress={this.showPicker_settime}>
                    <Icon
                      name="ios-time"
                      style={{ fontSize: 30, color: "#CCFFFF" }}
                    />
                    <Text style={{ color: "#fff", marginLeft: 5 }}>
                      set timer
                    </Text>
                    <Text style={{ color: "#fff", marginLeft: 70 }}>
                      {this.state.chosenDate}
                    </Text>
                  </Button>
                  <DateTimePicker
                    isVisible={this.state.isVisible_settime}
                    onConfirm={this.handlePicker_settime}
                    onCancel={this.hidePicker}
                    mode={"date"}
                  />
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 15
                      }}
                    >
                      <Icon
                        name="ios-calendar"
                        style={{ fontSize: 30, color: "#CCFFFF" }}
                      />
                      <Text style={{ color: "#fff", marginLeft: 20 }}>
                        Schedule
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 50 }}>
                    <TouchableOpacity onPress={this.showPicker_schedulestart}>
                      <Text style={{ color: "#fff", marginLeft: 20 }}>
                        start :
                      </Text>
                    </TouchableOpacity>

                    <Text style={{ color: "#fff", marginLeft: 50 }}>
                      {this.state.chosenDatetime_start}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 50 }}>
                    <TouchableOpacity onPress={this.showPicker_scheduleend}>
                      <Text style={{ color: "#fff", marginLeft: 20 }}>
                        end :{" "}
                      </Text>
                    </TouchableOpacity>

                    <Text style={{ color: "#fff", marginLeft: 53 }}>
                      {this.state.chosenDatetime_end}
                    </Text>
                  </View>

                  <DateTimePicker
                    isVisible={this.state.isVisible_schedulestart}
                    onConfirm={this.handlePicker_schedulestart}
                    onCancel={this.hidePicker}
                    mode={"datetime"}
                  />
                  <DateTimePicker
                    isVisible={this.state.isVisible_scheduleend}
                    onConfirm={this.handlePicker_scheduleend}
                    onCancel={this.hidePicker}
                    mode={"datetime"}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Button
                    transparent
                    light
                    onPress={() => {
                      this.setState({ showsetdevice: false, showstats: true });
                    }}
                  >
                    <Icon
                      name="ios-stats"
                      style={{ fontSize: 30, color: "#CCFFFF" }}
                    />
                    <Text style={{ color: "#fff", marginLeft: 5 }}>
                      {" "}
                      Statistic{" "}
                    </Text>
                  </Button>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Button
                    success
                    style={{
                      height: 50,
                      width: 150,
                      marginLeft: 15,
                      borderRadius: 15
                    }}
                    onPress={() => alert("Turn on device")}
                  >
                    <Text
                      style={{ marginLeft: 40, color: "#fff", fontSize: 18 }}
                    >
                      Turn on
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
          <Modal transparent={true} visible={this.state.showadddevice}>
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
                      this.setState({ showadddevice: false });
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
                    name="ios-outlet"
                    style={{ fontSize: 200, color: "#CCFFFF" }}
                  />
                  <Item picker style={{ marginLeft: 5 }}>
                    <Picker
                      mode="dropdown"
                      iosIcon={
                        <Icon name="arrow-down" style={{ color: "#fff" }} />
                      }
                      style={{ width: undefined }}
                      placeholder="Type"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#152238"
                      selectedValue={this.state.typedevice}
                      textStyle={{ color: "#fff" }}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      <Picker.Item label="Plug" value="key0" />
                      <Picker.Item label="Light" value="key1" />
                      <Picker.Item label="TV" value="key2" />
                      <Picker.Item label="Fridge" value="key3" />
                      <Picker.Item label="Router" value="key4" />
                    </Picker>
                  </Item>
                  <Item rounded style={{ width: 310, marginTop: 10 }}>
                    <Input
                      placeholder="Name device"
                      style={{ color: "#fff" }}
                    />
                  </Item>

                  <Item rounded style={{ width: 310, marginTop: 10 }}>
                    <Input placeholder="ID device" style={{ color: "#fff" }} />
                  </Item>
                  <Button
                    success
                    style={{
                      height: 50,
                      width: 150,
                      marginLeft: 15,
                      borderRadius: 15,
                      marginTop: 20
                    }}
                    onPress={() => alert("Add device finish!")}
                  >
                    <Text
                      style={{ marginLeft: 25, color: "#fff", fontSize: 18 }}
                    >
                      Add device
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
          <Modal transparent={true} visible={this.state.showstats}>
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
                      this.setState({ showstats: false, showsetdevice: true });
                    }}
                  >
                    <Icon
                      name="ios-close-circle"
                      style={{ fontSize: 40, color: "#666666", marginTop: 5 }}
                    />
                  </Button>
                </View>
                <Content>
                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{ alignItems: "center", flexDirection: "row" }}
                    >
                      <Text
                        style={{ color: "#fff", fontSize: 18, marginLeft: 10 }}
                      >
                        Select Month
                      </Text>
                      <Right>
                        <Form>
                          <Picker
                            mode="dropdown"
                            iosHeader="Select Month"
                            iosIcon={
                              <Icon
                                name="arrow-dropdown-circle"
                                style={{ color: "#fff", fontSize: 25 }}
                              />
                            }
                            placeholder="Select Month"
                            textStyle={{ color: "#fff" }}
                            itemTextStyle={{}}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                          >
                            <Picker.Item label="January" value="key1" />
                            <Picker.Item label="February" value="key2" />
                            <Picker.Item label="March" value="key3" />
                            <Picker.Item label="April" value="key4" />
                            <Picker.Item label="May" value="key5" />
                            <Picker.Item label="June" value="key6" />
                            <Picker.Item label="July" value="key7" />
                            <Picker.Item label="August" value="key8" />
                            <Picker.Item label="September" value="key9" />
                            <Picker.Item label="October" value="key10" />
                            <Picker.Item label="November" value="key11" />
                            <Picker.Item label="December" value="key12" />
                          </Picker>
                        </Form>
                      </Right>
                    </View>
                    <Graph />
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        marginTop: 10
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#152238",
                          borderRadius: 16,
                          height: 90,
                          width: Dimensions.get("window").width / 3,
                          marginLeft: 10
                        }}
                      >
                        <View style={{ alignItems: "center", marginTop: 20 }}>
                          <Text style={{ fontSize: 16, color: "#fff" }}>
                            ปริมาณไฟที่ใช้
                          </Text>
                          <Text style={{ fontSize: 16, color: "#fff" }}>
                            200 W
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#152238",
                          borderRadius: 16,
                          height: 90,
                          width: Dimensions.get("window").width / 3,
                          marginLeft: 10
                        }}
                      >
                        <View style={{ alignItems: "center", marginTop: 20 }}>
                          <Text style={{ fontSize: 16, color: "#fff" }}>
                            ค่าไฟ ณ ปัจจุบัน
                          </Text>
                          <Text style={{ fontSize: 16, color: "#fff" }}>
                            1400 บ.
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        backgroundColor: "#152238",
                        borderRadius: 16,
                        height: 80,
                        width: Dimensions.get("window").width/2+80,
                        marginLeft: 10,
                        marginTop:20
                      }}
                    >
                      <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text style={{ fontSize: 16, color: "#fff" }}>
                          จำนวนชั่วโมงที่ใช้
                        </Text>
                        <Text style={{ fontSize: 16, color: "#fff" }}>
                          20 hr
                        </Text>
                      </View>
                    </View>
                  </View>
                </Content>
              </View>
            </View>
          </Modal>
        </Content>
      </Container>
    );
  }
}
export default Roomdevice;

