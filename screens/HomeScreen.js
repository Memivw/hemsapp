import React, { Component } from "react";
import {
  Text,
  Modal,
} from "react-native";
import {
  Header,
  Left,
  Right,
  Body,
  CardItem,
  Container,
  CardContent,
  Button,
  Content,
  Icon, Card, View,Title,
} from "native-base";
import { Dimensions } from "react-native";
import Graph from './Graph';
const screenWidth = Dimensions.get("window").width - 60;
const screenHeight = Dimensions.get("window").height - 170;

import Carddevice from '../components/Carddevice';
class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

  render() {
    return (
      <Container style={{ backgroundColor:'#152238'}}>      
        <Header hasTabs style={{ backgroundColor: '#1c2e4a', height: 100,paddingTop: 0}} >
          <Left style={{ flexDirection: 'row'}} >
            <Button transparent style={{paddingTop:0 }} >
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}
              style={{color:'#fff'}}>
              </Icon>
            </Button> 
            <Text style={{color:'#fff',marginLeft:10,fontSize:24}}>Hello, Tony S.</Text>
          </Left>           
          <Right style={{ flexDirection: 'column',paddingTop: 15,marginRight:5}}>
            <Text style={{ fontSize: 12, color: "#00CC99"}}>ปริมาณไฟที่ใช้ 30 W</Text>
            <Text style={{ fontSize: 12, color: "#00CC99" }}>ค่าไฟ ณ ปัจจุบัน 30 W</Text>
            <Text style={{ fontSize: 12, color: "#666666" }}>*เทียบกับสัปดาห์ก่อนหน้า</Text>
          </Right>
        </Header>
        <Content >
        <View >
           <Graph />
        </View>
          <Text style={{ fontSize: 18,color:"#fff",marginLeft:10 }}>Recent</Text>
          <Content horizontal style={{marginTop:10}} >
            <View style={{ backgroundColor:'#1c2e4a',borderRadius:16, height: 150, width: Dimensions.get("window").width / 3,marginLeft:10}} 
              onStartShouldSetResponder={() => { this.setState({ show: true }) }} >
              
                  <View style={{ alignItems: 'center',marginTop:20}}>
                <Icon active name="bulb" style={{ fontSize: 70, color:"#ffa726" }} />
                    <Text style={{ fontSize: 18,color:"#fff" }} >Light</Text>
                    <Text style={{ fontSize: 12, color: "#fff" }} >Bedroom</Text>
                  </View>
              </View>
           
            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 150, width: Dimensions.get("window").width / 3, marginLeft: 10 }}
              onStartShouldSetResponder={() => { this.setState({ show: true }) }} >

              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Icon active name="bulb" style={{ fontSize: 70, color: "#ffa726" }} />
                <Text style={{ fontSize: 18, color: "#fff" }} >Light</Text>
                <Text style={{ fontSize: 12, color: "#fff" }} >Bedroom</Text>
              </View>
            </View>

            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 150, width: Dimensions.get("window").width / 3, marginLeft: 10 }}
              onStartShouldSetResponder={() => { this.setState({ show: true }) }} >

              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Icon active name="bulb" style={{ fontSize: 70, color: "#ffa726"}} />
                <Text style={{ fontSize: 18, color: "#fff" }} >Light</Text>
                <Text style={{ fontSize: 12, color: "#fff" }} >Bedroom</Text>
              </View>
            </View>

            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 150, width: Dimensions.get("window").width / 3, marginLeft: 10 }}
              onStartShouldSetResponder={() => { this.setState({ show: true }) }} >

              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Icon active name="bulb" style={{ fontSize: 70, color: "#ffa726" }} />
                <Text style={{ fontSize: 18, color: "#fff" }} >Light</Text>
                <Text style={{ fontSize: 12, color: "#fff" }} >Bedroom</Text>
              </View>
            </View>
          </Content>

          <Text style={{ fontSize: 18,color:"#fff",marginLeft:10,marginTop:10 }}>Room</Text>
          <View>  
            <View style={{ flexDirection: "row", flex: 1,marginTop:10}}>
              <View style={{backgroundColor:'#1c2e4a',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} 
                onStartShouldSetResponder={() => { this.props.navigation.navigate('Roomdevice') }} >
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99" , fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>

                  <View style={{ alignItems: 'center'}}>
                    <Icon active name="ios-bed" style={{ fontSize: 80,color:"#00CC99" }} />
                    <Text style={{ fontSize: 18,color:"#fff" }} >Bedroom</Text>
                  </View>
              </View>
              <View style={{backgroundColor:'#1c2e4a',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} >
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99" , fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                
                  <View style={{ alignItems: 'center'}}>
                    <Icon active name="ios-tv" style={{ fontSize: 80,color:"#00CC99" }} />
                    <Text style={{ fontSize: 18,color:"#fff" }} >Living room</Text>
                  </View>
              </View>
          </View>
          <View style={{ flexDirection: "row", flex: 1,marginTop:10}}>
              <View style={{backgroundColor:'#1c2e4a',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} 
                  onStartShouldSetResponder={() => alert('You click Kitchen room')}>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99" , fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>

                  <View style={{ alignItems: 'center'}}>
                    <Icon active name="ios-pizza" style={{ fontSize: 80,color:"#00CC99" }} />
                    <Text style={{ fontSize: 18,color:"#fff" }} >Kitchen room</Text>
                  </View>
              </View>
              <View style={{ backgroundColor:'#1c2e4a',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} >
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99" , fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                
                  <View style={{ alignItems: 'center'}}>
                    <Icon active name="ios-bed" style={{ fontSize: 80,color:"#00CC99" }} />
                    <Text style={{ fontSize: 18,color:"#fff" }} >Bedroom</Text>
                  </View>
              </View>
          </View>
          </View>

            <Modal
            transparent={true}
            visible={this.state.show}>
            <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
              <View style={{marginTop:100,width: screenWidth, height: screenHeight, backgroundColor: '#1c2e4a', borderRadius: 20,alignSelf:'center' }} >
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
export default HomeScreen;
HomeScreen.navigationOptions = {
  title: "Home",
  headerStyle:{
    backgroundColor: '#0A0A3E',
  },
};
