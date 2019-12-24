import React from 'react';
import {
  Image,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
import{Text,List, ListItem} from 'native-base'; 
export class SideMenu extends React.Component{
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
             <ScrollView>
                 <List>
                     <ListItem>
                         <Text>Setting</Text>
                     </ListItem>
                     <ListItem>
                         <Text>Profile</Text>
                     </ListItem>
                 </List>
             </ScrollView>

            </SafeAreaView>
        )
    }
}