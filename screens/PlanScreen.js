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
export default function PlanScreen() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <Text>Plan Screen</Text>
          </View>
        </ScrollView>
         
    </View>
  );
}
PlanScreen.navigationOptions = {
    title: 'Plan',
};