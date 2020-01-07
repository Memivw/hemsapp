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
import { Avatar, Button, Card, Title, Paragraph ,IconButton,Switch} from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { CardItem,Left,Body} from 'native-base';
class DeviceScreen extends React.Component {
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
                      type='ionicon' 
                      size ={50}
                      />
                     <Body>
                       <Text>Light</Text>
                       <Text note>total : 4 hr</Text>
                       </Body>
                   </Left>
                 </CardItem>
                 <CardItem>
                  <Left>
                     <Icon name='ios-outlet'
                      type='ionicon' 
                      size ={50}
                      />
                     <Body>
                       <Text>Plug</Text>
                       <Text note>total : 2 hr</Text>
                       </Body>
                   </Left>
                 </CardItem>
                 <CardItem>
                  <Left>
                     <Icon name='ios-outlet'
                      type='ionicon' 
                      size ={50}
                      />
                     <Body>
                       <Text>Plug 2</Text>
                       <Text note>total : 2 hr</Text>
                       </Body>
                   </Left>
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
