import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function ProfileScreen() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <Text>Profile Screen</Text>
          </View>
        </ScrollView>
         
    </View>
  );
}
ProfileScreen.navigationOptions = {
    title: 'Profile',
};