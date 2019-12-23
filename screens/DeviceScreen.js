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

export default function DeviceScreen() {
    return (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
  
                <View style={styles.DeviceContainner}>
  
                 <Text style = {styles.DeviceText} >Hellowaraporn</Text>
  
                </View>
          </ScrollView>
          </View>
      );
}

DeviceScreen.navigationOptions = {
  title: 'Device',
  headerStyle:{
    backgroundColor: '#fff',
    
  },
};

const styles = StyleSheet.create({
    DeviceContainner :{
    alignItems: 'center',
    
    },

    DeviceText:{
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    }

});
