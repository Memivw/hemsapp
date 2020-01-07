import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, List, ListItem } from 'native-base';

export const SideMenu = (props) => (<SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
    <List>
        <ListItem onPress={()=> {props.navigation.navigate('Home')}}>
        <Text>Home</Text>
         </ListItem>
         <ListItem onPress={()=> {props.navigation.navigate('Plan')}}>
        <Text>Plan</Text>
         </ListItem>
         <ListItem onPress={()=> {props.navigation.navigate('Device')}}>
        <Text>Device</Text>
         </ListItem>
         <ListItem onPress={()=> {props.navigation.navigate('Statistic')}}>
        <Text>Statistic</Text>
         </ListItem>
      <ListItem onPress={()=> {props.navigation.navigate('Profile')}}>
        <Text>Profile</Text>
      </ListItem>
      <ListItem  onPress={()=> {props.navigation.navigate('Setting')}}>
        <Text>Setting</Text>
      </ListItem>
    </List>
  </ScrollView>
</SafeAreaView>);