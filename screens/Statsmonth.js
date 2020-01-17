import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
} from 'react-native';
import { Header, Left, Right, Body, CardItem, Container, Icon, Content, Picker, Form, DatePicker } from 'native-base'
import {  Card } from 'react-native-paper';//npm i react-native-paper

import Graph from './Graph';
class Statsmonth extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: 'key1'
            };
        }
        onValueChange(value: string) {
            this.setState({
                selected: value
            });
        }
    render() {
        return (
            <Container style={{ backgroundColor: '#152238' }}>
                <Content>
                    <View style={{ marginTop: 10 }}>
                        
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                        <Text style={{ color: "#fff",fontSize:18,marginLeft:10}} >Select Month</Text>
                        <Right>
                                <Form>
                                    <Picker
                                        mode="dropdown"
                                        iosHeader="Select Month"
                                        iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#fff", fontSize: 25 }} />}
                                        placeholder="Select Month"
                                        textStyle={{ color: "#fff" }}
                                        itemTextStyle={{}}
                                        style={{ width: undefined }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        <Picker.Item label="January" value="key1" />
                                        <Picker.Item label="February" value="key2" />
                                        <Picker.Item label="March" value="key3" />
                                        <Picker.Item label="April" value="key4" />
                                        <Picker.Item label="May" value="key5" />
                                        <Picker.Item label="June" value="key6" />
                                        <Picker.Item label="July" value="key7" />
                                        <Picker.Item label="August" value="key8" />
                                        <Picker.Item label="September" value="key9" />
                                        <Picker.Item label="October" value="key10" />
                                        <Picker.Item label="November" value="key11" />
                                        <Picker.Item label="December" value="key12" />
                                    </Picker>
                                </Form>
                        </Right>
                        </View>
                        <Graph />
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 90, width: Dimensions.get("window").width / 3, marginLeft: 10 }}>
                                <View style={{ alignItems: 'center', marginTop: 20 }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }} >ปริมาณไฟที่ใช้</Text>
                                    <Text style={{ fontSize: 16, color: "#fff" }} >200 W</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#1c2e4a', borderRadius: 16, height: 90, width: Dimensions.get("window").width / 3, marginLeft: 10 }}>
                                <View style={{ alignItems: 'center', marginTop: 20 }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }} >ค่าไฟ ณ ปัจจุบัน</Text>
                                    <Text style={{ fontSize: 16, color: "#fff" }} >1400 บ.</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 10 }} >
                            <Text style={{ fontSize: 18, color: "#fff" }}>Summerize</Text>
                            <View style={{ padding: 10 }} >
                                <Card style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                                    <CardItem style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                                        <Left>
                                            <Icon name='ios-bulb'
                                                size={50}
                                                style={{ color: '#ffa726' }}
                                            />
                                            <Body>
                                                <Text style={{ fontSize: 14, color: '#fff' }}>Light</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                                                    <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                                                </View>

                                            </Body>
                                        </Left>
                                        <Right>
                                            <Text style={{ fontSize: 14, color: "#fff" }} >ปริมาณไฟที่ใช้ 200 w</Text>
                                        </Right>
                                    </CardItem>
                                    <CardItem style={{ backgroundColor: '#1c2e4a' }}>
                                        <Left>
                                            <Icon name='ios-outlet'
                                                size={50}
                                                style={{ color: '#CCFFFF' }}
                                            />
                                            <Body>
                                                <Text style={{ fontSize: 14, color: '#fff' }}>Plug</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                                                    <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                                                </View>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Text style={{ fontSize: 14, color: "#fff" }} >ปริมาณไฟที่ใช้ 200 w</Text>
                                        </Right>
                                    </CardItem>
                                    <CardItem style={{ backgroundColor: '#1c2e4a', borderRadius: 20 }}>
                                        <Left>
                                            <Icon name='ios-outlet'
                                                size={50}
                                                style={{ color: '#CCFFFF' }}
                                            />
                                            <Body>
                                                <Text style={{ fontSize: 14, color: '#fff' }}>Plug 2</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon name='md-time' style={{ fontSize: 15, color: '#fff', marginTop: 3 }} />
                                                    <Text note style={{ marginLeft: 5, color: '#fff' }}>total : 4 hr</Text>
                                                </View>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Text style={{ fontSize: 14, color: "#fff" }} >ปริมาณไฟที่ใช้ 200 w</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default Statsmonth;
