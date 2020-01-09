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
  CardContent,
  Button,
  Content,
  Icon, Card, View,Title,
} from "native-base";
//import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper';//npm i react-native-paper
import { Dimensions } from "react-native";
import Graph from './Graph';
const {height: screenHeight} = Dimensions.get('window');


class HomeScreen extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#0A0A3E'}}>      
        <Header hasTabs style={{backgroundColor:'#373759'}} >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}
              style={{color:'#fff'}}>
              </Icon>
            </Button>
          </Left>          
          <Body>
            <Title style={{color:'#fff'}}>Home</Title>
          </Body>     
          <Right>
            <Text style={{ fontSize: 12, color: "#00CC99"}}>ปริมาณไฟที่ใช้ 30 W</Text>
          </Right>
        </Header>
        <Content >
        <View >
           <Graph />
        </View>
          <Text style={{ fontSize: 18,color:"#fff",marginLeft:10 }}>Recent</Text>
          <Content horizontal style={{marginTop:10}} >
                <View style={{backgroundColor:'#373759',borderRadius:16, height: 150, width: Dimensions.get("window").width / 3,marginLeft:10}} 
              onStartShouldSetResponder={() => { this.props.navigation.navigate('Roomdevice')}} >
            
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99" , fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}> 1</Text>
                  </Icon>
                
                  <View style={{ alignItems: 'center'}}>
                    <Icon active name="ios-bed" style={{ fontSize: 60,color:"#00CC99" }} />
                    <Text style={{ fontSize: 12,color:"#fff" }} >Bedroom</Text>
                  </View>
              </View>
           
                <View style={{backgroundColor:'#373759',borderRadius:16, height: 150, width: Dimensions.get("window").width / 3,marginLeft:20}}>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99", fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Icon active name="ios-bed" style={{ fontSize: 60,color:"#00CC99" }} />
                  <Text style={{ fontSize: 12,color:"#fff"  }} >Bedroom</Text>
                  </View>
                </View>

          <View style={{backgroundColor:'#373759',borderRadius:16, height: 150, width: Dimensions.get("window").width / 3,marginLeft:20}}>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99", fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Icon active name="ios-bed" style={{ fontSize: 60 ,color:"#00CC99"}} />
                  <Text style={{ fontSize: 12,color:"#fff" }} >Bedroom</Text>
                  </View>
                </View>

                <View style={{backgroundColor:'#373759',borderRadius:16, height: 150, width: Dimensions.get("window").width / 3,marginLeft:20}}>
                  <Icon active name="bulb" style={{ color: "#ffa726", fontSize: 18 ,marginStart:10,marginTop:10}} >
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <Icon active name="ios-outlet" style={{ color:"#00CC99", fontSize: 18,marginStart:10,marginTop:10 }}>
                    <Text style={{ fontSize: 8 }}>1</Text>
                  </Icon>
                  <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Icon active name="ios-bed" style={{ fontSize: 60 ,color:"#00CC99"}} />
                  <Text style={{ fontSize: 12,color:"#fff" }} >Bedroom</Text>
                  </View>
                </View>
          </Content>

          <Text style={{ fontSize: 18,color:"#fff",marginLeft:10,marginTop:10 }}>Room</Text>
          <View>  
            <View style={{ flexDirection: "row", flex: 1,marginTop:10}}>
              <View style={{backgroundColor:'#373759',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} 
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
              <View style={{backgroundColor:'#373759',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} >
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
              <View style={{backgroundColor:'#373759',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} 
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
              <View style={{backgroundColor:'#373759',borderRadius:16, height: 200, width: Dimensions.get("window").width/2-15,marginLeft:10}} >
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
