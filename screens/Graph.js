import React, { Component } from 'react';
import {
    LineChart,
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { View } from 'native-base';
const screenWidth = Dimensions.get("window").width/4*3;

class Graph extends Component {
    render(){
      return (
        <View >
        <LineChart
            data={data}
            width={screenWidth} // from react-native
            height={250}
            yAxisLabel={"$"}
            yAxisSuffix={"k"}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            
          />
        </View>
        );
    }
}
export default Graph;
const data = 
  {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
    {
       data: [
        20, 45, 28, 80, 99, 43
      ]
    }
    ]
 }

const chartConfig = {
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
};