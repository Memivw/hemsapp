import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, Content, CardItem, Switch} from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import {  Card} from 'react-native-paper';
import HomeScreen from './HomeScreen';


class Roomdevice extends Component {
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
                        <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
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
                <Content style={{marginTop:5}}>
                    <View style={{ padding: 10, borderRadius: 25 }} >
                        <Card style={{ elevation: 2 }} >
                            <CardItem button onPress={() => { this.props.navigation.navigate('Setdevice') }} style={{ backgroundColor: '#373759' }}>
                                    <Left>
                                        <Icon name='ios-bulb'
                                            style={{ fontSize: 50, color: "#ffa726"}}
                                        />
                                        <Body>
                                        <Text style={{ color: '#fff' }}>Light</Text>
                                        <Text note style={{ color: '#fff' }}>total : 4 hr</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Switch onValueChange={this.toggleSwitch}
                                            value={this.state.switchValue} />
                                    </Right>
                                </CardItem>
                        </Card>
                    </View>
                    <View style={{padding:10, borderRadius: 25}} >
                        <Card style={{ elevation: 2 }} >
                            <CardItem button onPress={() => { this.props.navigation.navigate('Setdevice') }} style={{backgroundColor: '#373759' }}>
                                <Left>
                                    <Icon name='ios-outlet'
                                        style={{ fontSize: 50, color: "#CCFFFF" }}
                                    />
                                    <Body>
                                        <Text style={{color:'#fff'}}>Plug</Text>
                                        <Text note style={{ color: '#fff' }}>total : 4 hr</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Switch onValueChange={this.toggleSwitch}
                                        value={this.state.switchValue} />
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ padding: 10, borderRadius: 25 }} >
                        <Card style={{ elevation: 2}} >
                            <CardItem button onPress={() => { this.props.navigation.navigate('Setdevice') }} style={{ backgroundColor: '#373759' }}>
                                <Left>
                                    <Icon name='ios-outlet'
                                        style={{ fontSize: 50, color: "#CCFFFF" }}
                                    />
                                    <Body>
                                        <Text style={{ color: '#fff'}}>Plug</Text>
                                        <Text note style={{ color: '#fff'}}>total : 4 hr</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Switch onValueChange={this.toggleSwitch}
                                        value={this.state.switchValue} />
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ alignItems: 'center',marginTop:50 }}>
                        <Button rounded light style={{ height: 50, width: 180, alignItems: 'center' }} onPress={() =>alert("Add device")} >
                            <View style={{alignItems: 'center',marginLeft:20}}>
                                 <Icon name='ios-add'>
                                    <Text style={{fontSize:18}}>  Add device</Text>
                                </Icon>
                            </View>
                        </Button>
                    </View>
                </Content>

            </Container>
        );
    }
}
export default Roomdevice;
