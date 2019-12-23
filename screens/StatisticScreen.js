import * as WebBrowser from 'expo-web-browser';
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
export default function StatisticScreen() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

              <View style={styles.StatisticContainner}>

               <Text style = {styles.StatisticText} >Hellowaraporn</Text>

              </View>
        </ScrollView>
        </View>
    );
}
StatisticScreen.navigationOptions = {
    title:'Statistic',
};
const styles = StyleSheet.create({
    StatisticContainner :{
    alignItems: 'center',
    
    },

    StatisticText:{
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    }

});