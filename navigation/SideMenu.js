import React from 'react';
import { ScrollView,View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, List, ListItem } from 'native-base';
import {  Icon ,Container,Content} from 'native-base';

export const SideMenu = (props) => (<SafeAreaView style={{ flex: 1, backgroundColor: '#1c2e4a' }}>
  <Container style={{ backgroundColor:'#1c2e4a'}}>
  <View style={{alignSelf:'center'}}>
      <Icon active name="md-contact" style={{ fontSize: 130,color: '#fff' }}/>
    </View>
    <Content>
       <List>
        <ListItem onPress={()=> {props.navigation.navigate('Home')}}>
          <Icon name="ios-home" style={{ color: '#fff' }} />
          <Text style={{color: '#fff' ,marginLeft:15}}>Home</Text>
         </ListItem>
         <ListItem onPress={()=> {props.navigation.navigate('Plan')}}>
          <Icon name="ios-pie" style={{ color: '#fff' }} />
          <Text style={{ color: '#fff', marginLeft: 15 }}>Plan</Text>
         </ListItem>
         <ListItem onPress={()=> {props.navigation.navigate('Device')}}>
          <Icon name="ios-outlet" style={{ color: '#fff' }} />
          <Text style={{ color: '#fff', marginLeft: 15 }}>Device</Text>
         </ListItem>
         <ListItem onPress={()=> {props.navigation.navigate('Statistic')}}>
          <Icon name="ios-stats" style={{ color: '#fff' }} />       
          <Text style={{ color: '#fff', marginLeft: 15 }}>Statistic</Text>
         </ListItem>
      <ListItem onPress={()=> {props.navigation.navigate('Profile')}}>
          <Icon name="ios-person" style={{ color: '#fff' }} />   
          <Text style={{ color: '#fff', marginLeft: 15}}>Profile</Text>
      </ListItem>
      <ListItem  onPress={()=> {props.navigation.navigate('Setting')}}>
          <Icon name="ios-settings" style={{ color: '#fff' }} />   
          <Text style={{ color: '#fff', marginLeft: 15 }}>Setting</Text>
      </ListItem>
    </List>
    </Content>
    <List>
      <ListItem noBorder onPress={() => { props.navigation.navigate('Login') }}>
        <Text style={{ color: '#fff' }}>Logout</Text>
        <View style={{marginStart:200}}>
        <Icon name="ios-log-out" style={{ color: '#fff'}} />
        </View>
      </ListItem>
    </List>
  </Container>
</SafeAreaView>);