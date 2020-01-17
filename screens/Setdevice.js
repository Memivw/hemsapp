import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, Content, CardItem, Switch } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { Card } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import Carddevice from '../components/Carddevice';

//import Carddevice from 'C:\Users\Milk\Desktop\hemsproject\components\Carddevice.js';
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
);
class Setdevice extends Component {
    state = { switchValue: true }
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({ switchValue: value })
        //state changes according to switch
        //which will result in re-render the text
    }
    render() {
        return (
            <Container style={{ backgroundColor: '#0A0A3E' }}>
                <Header style={{ backgroundColor: '#373759' }} >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("Roomdevice")}>
                            <Icon name='arrow-back' style={{ color: '#fff' }} >
                            </Icon>
                            <Text style={{ color: '#fff' }}>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>BedRoom</Title>
                    </Body>
                    <Right />
                </Header>
                <Content horizontal style={{ marginTop: 5 }}>
                    <Carddevice/>
                </Content>
                
            </Container>
        );
    }
}
export default Setdevice;
