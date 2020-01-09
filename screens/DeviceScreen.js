import * as React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { Avatar, Card, Paragraph ,IconButton} from 'react-native-paper';
import { CardItem,Left,Body,Switch, Right, Header, Button, Icon, Title,Container,Content } from 'native-base';
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
            <Title style={{color:'#fff'}}>Device</Title>
          </Body>     
          <Right></Right>
        </Header>
        <Content >
        <View >
          <View style={{padding:10}} >
              <Text style={{ fontSize: 18,color: "#fff"}}>Living room</Text>
            <View style={{padding:10 }} >
                <Card style={{ backgroundColor: '#373759', borderRadius:20 }}>
                  <CardItem style={{ backgroundColor: '#373759', borderRadius: 20 }}>
                  <Left>
                     <Icon name='ios-bulb'
                      size ={50}
                      style={{ color: '#ffa726'}}
                      />
                     <Body>
                       <Text style={{ color: '#fff'}}>Light</Text>
                       <Text note style={{ color: '#fff'}}>total : 4 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
                  <CardItem style={{ backgroundColor: '#373759' }}>
                  <Left>
                     <Icon name='ios-outlet'         
                      size ={50}
                       style={{ color: '#CCFFFF'}}
                      />
                     <Body>
                       <Text style={{ color: '#fff'}}>Plug</Text>
                       <Text note style={{ color: '#fff'}}>total : 2 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
                  <CardItem style={{ backgroundColor: '#373759', borderRadius: 20 }}>
                  <Left>
                     <Icon name='ios-outlet' 
                      size ={50}
                       style={{ color: '#CCFFFF'}}
                      />
                     <Body>
                       <Text style={{ color: '#fff'}}>Plug 2</Text>
                       <Text note style={{ color: '#fff'}}>total : 2 hr</Text>
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
