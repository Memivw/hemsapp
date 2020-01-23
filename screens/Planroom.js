import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import{Container,Header,Left,Right,Body,CardItem,Icon} from 'native-base'
import {Card} from 'react-native-paper';//npm i react-native-paper
class Planroom extends Component {
  render(){
    return (
      <Container style={{ backgroundColor: '#152238' }}>
        <View style={{padding:10}} >
          <Text style={{ color: '#fff',fontSize:18 }}>Living room</Text>
            <View style={{padding:10}} >
            <Card style={{ backgroundColor: '#373759' }}>
              <CardItem style={{ backgroundColor: '#1c2e4a' }}>
                  <Left>
                     <Icon name='ios-bulb'
                      size ={50}
                      style={{ color: "#ffa726"}}
                      />
                     <Body>
                       <Text style={{ color: "#fff" }}>Light</Text>
                       <View style={{flexDirection:'row'}}>
                      <Icon name='md-time' style={{ fontSize: 18, color: "#666666"}}/>  
                      <Text note style={{ marginLeft: 5, color: "#666666" }}>total : 4 hr</Text>
                       </View>
                      
                       </Body>
                   </Left>
                   <Right>
                     <Body>
                    <Text style={{ color: "#fff" }}> 08.00 - 12.00</Text>
                     </Body>
                   </Right>
                 </CardItem>
              <CardItem style={{ backgroundColor: '#152238' }}>
                  <Left>
                     <Icon name='ios-outlet'
                      size ={50}
                      style={{ color: '#CCFFFF' }}
                      />
                     <Body>
                    <Text style={{ color: "#fff" }}>Plug</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon name='md-time' style={{ fontSize: 18, color: "#666666" }} />
                      <Text note style={{ marginLeft: 5, color: "#666666"  }}>total : 4 hr</Text>
                    </View>
                       </Body>
                   </Left>
                   <Right>
                     <Body>
                    <Text style={{ color: "#fff" }}> 08.00 - 12.00</Text>
                     </Body>
                   </Right>
                 </CardItem>
              <CardItem style={{ backgroundColor: '#1c2e4a' }}>
                  <Left>
                     <Icon name='ios-outlet' 
                      size ={50}
                      style={{ color: '#CCFFFF' }}
                      />
                     <Body>
                    <Text style={{ color: "#fff" }}>Plug 2</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon name='md-time' style={{ fontSize: 18, color: "#666666"}} />
                      <Text note style={{ marginLeft: 5, color: "#666666"  }}>total : 4 hr</Text>
                    </View>
                       </Body>
                   </Left>
                   <Right>
                     <Body>
                    <Text style={{ color: "#fff" }}> 08.00 - 12.00</Text>
                     </Body>
                   </Right>
                 </CardItem>
               </Card>
              </View>
            </View>   
      </Container>
     );
  }
}
export default Planroom;
