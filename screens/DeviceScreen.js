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
import { CardItem,Left,Body,Switch, Right, Header, Button, Icon, Title } from 'native-base';
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
      <View style={{flex:1}}>
       <ScrollView>
        <View >
          <View style={{padding:10}} >
            <Text>Living room</Text>
            <View style={{padding:10}} >
            <Card>
               <CardItem>
                  <Left>
                     <Icon name='ios-bulb'
                      size ={50}
                      />
                     <Body>
                       <Text>Light</Text>
                       <Text note>total : 4 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch1}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
                 <CardItem>
                  <Left>
                     <Icon name='ios-outlet'         
                      size ={50}
                      />
                     <Body>
                       <Text>Plug</Text>
                       <Text note>total : 2 hr</Text>
                       </Body>
                   </Left>
                   <Right>
                      <Switch onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}/>
                   </Right>
                 </CardItem>
                 <CardItem>
                  <Left>
                     <Icon name='ios-outlet'
                      size ={50}
                      />
                     <Body>
                       <Text>Plug 2</Text>
                       <Text note>total : 2 hr</Text>
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
        </ScrollView>
       
       </View>
   );
  }
}
export default DeviceScreen;
DeviceScreen.navigationOptions = {
  title: 'Device',
  headerStyle:{
    backgroundColor: '#fff',
  },
};
