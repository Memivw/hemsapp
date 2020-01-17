import * as React from 'react';

import {
    Text,
    View,
  } from 'react-native';
import { Card} from 'react-native-paper';
import { CardItem, Left, Body, Switch, Right, Header, Button, Icon, Title, Container, Content} from 'native-base';


class DeviceScreen extends React.Component {
  state = {switchValue:true}
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      //state changes according to switch
      //which will result in re-render the text
   }
  render(){
    return (
      <Container style={{backgroundColor:'#152238'}}>      
        <Header hasTabs style={{ backgroundColor:'#1c2e4a'}} >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}
              style={{color:'#fff'}}>
              </Icon>
            </Button>
          </Left>          
          <Body>
            <Title style={{color:'#fff'}}>Device</Title>
          </Body>     
          <Right></Right>
        </Header>
        <Content >
        <View >
          <View style={{padding:10}} >
              <Text style={{ fontSize: 18,color: "#fff"}}>Living room</Text>
            <View style={{padding:10 }} >
                <Card style={{ backgroundColor: '#1c2e4a', borderRadius:20 }}>
                  <CardItem style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                  <Left>
                     <Icon name='ios-bulb'
                      size ={50}
                      style={{ color: '#ffa726'}}
                      />
                     <Body>
                       <Text style={{ color: '#fff'}}>Light</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name='md-time' style={{ fontSize: 15, color: '#fff' ,marginTop:3}} />
                          <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                        </View>
                       
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
                  <CardItem style={{ backgroundColor: '#1c2e4a' }}>
                  <Left>
                     <Icon name='ios-outlet'         
                      size ={50}
                       style={{ color: '#CCFFFF'}}
                      />
                     <Body>
                       <Text style={{ color: '#fff'}}>Plug</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                          <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                        </View>
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
                  <CardItem style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                  <Left>
                     <Icon name='ios-outlet' 
                      size ={50}
                       style={{ color: '#CCFFFF'}}
                      />
                     <Body>
                       <Text style={{ color: '#fff'}}>Plug 2</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                          <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                        </View>
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
               </Card>
              </View>
            </View>

         </View>
        </Content>
       
       </Container>
   );
  }
}
export default DeviceScreen;
DeviceScreen.navigationOptions = {
  title:'Device',
  headerStyle:{
    backgroundColor: '#0A0A3E',
  },
};
