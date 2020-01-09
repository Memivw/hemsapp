import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, Content, CardItem, Switch, Card } from 'native-base';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width - 60;
const screenHeight = Dimensions.get("window").height - 170;
class Carddevice extends Component {
    state = { switchValue: true }
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({ switchValue: value })
        //state changes according to switch
        //which will result in re-render the text
    }
    render() {
        return (
            <View style={{ marginTop: 60, marginLeft: 20, width: screenWidth, height: screenHeight, backgroundColor: '#373759', borderRadius: 20 }} >
                <View style={{ alignItems: 'flex-end', marginEnd: 10 }}>
                  <Button transparent style={{height:60}}  onPress={() =>alert("delete device")} >
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
                <View style={{ flexDirection: "row", marginTop: 10}}>
                    <Button bordered style={{ borderColor: '#FFF',height: 50, width: 150, marginLeft: 15, borderRadius: 15}}>
                        <Text style={{marginLeft:20,color:'#fff'}}>total time: 4hr</Text>
                    </Button>                   
                    <Button bordered style={{ borderColor: '#FFF', height: 50, width: 150, marginLeft: 15, borderRadius: 15 }}>
                        <Text style={{ marginLeft: 20,color:'#fff' }}>total time: 4hr</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: "row",marginLeft:50,marginTop:5,alignItems: 'center' }}>
                        <Icon name='ios-time'
                            style={{ fontSize: 30, color: "#CCFFFF"}}
                        />
                        <Text style={{color:'#fff',marginLeft:5}}> set timer </Text>
                </View>
                <View style={{ flexDirection: "row",marginLeft:50,marginTop:5,alignItems: 'center' }}>
                        <Icon name='ios-calendar'
                            style={{ fontSize: 30, color: "#CCFFFF"}}
                        />
                        <Text style={{color:'#fff',marginLeft:5}}> Schedule </Text>
                </View>
                <View style={{ flexDirection: "row",marginLeft:50,marginTop:5,alignItems: 'center' }}>
                        <Icon name='ios-stats'
                            style={{ fontSize: 30, color: "#CCFFFF"}}
                        />
                        <Text style={{color:'#fff',marginLeft:5}}> Statistic </Text>
                </View>
                <View style={{ alignItems: 'center' }} >
                 <Button success style={{ height: 50, width: 150, marginLeft: 15, borderRadius: 15}} onPress={() =>alert("Turn on device")}>
                        <Text style={{marginLeft:40,color:'#fff',fontSize: 18}} >Turn on</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
export default Carddevice;