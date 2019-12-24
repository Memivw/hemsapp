import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, List, ListItem } from 'native-base';
export const SideMenu = (props) => (<SafeAreaView style={{ flex: 1 }}>
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
</SafeAreaView>);
