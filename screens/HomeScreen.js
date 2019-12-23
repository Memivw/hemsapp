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
export default function HomeScreen() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <Text>Home Screen</Text>
          </View>
        </ScrollView>
         
    </View>
  );
}
HomeScreen.navigationOptions = {
    title: 'Home',
};