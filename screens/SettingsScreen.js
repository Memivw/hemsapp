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
export default function SettingScreen() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <Text>Setting Screen</Text>
          </View>
        </ScrollView>
         
    </View>
  );
}
SettingScreen.navigationOptions = {
    title: 'Setting',
};