import * as React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { CardItem, Left, Body, Switch, Right, Header, Button, Icon, Title, Container, Content, List, ListItem, SwipeRow } from 'native-base';
class Roomsetting extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#152238' }}>
                <Header hasTabs style={{ backgroundColor: '#1c2e4a' }} >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("Setting")}>
                            <Icon name='arrow-back' style={{ color: '#fff' }}>
                            </Icon>
                            <Text style={{ color: '#fff' }}>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Room setting</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <View style={{ marginTop: 30 }}>
                       
                        <List>
                            <ListItem onPress={() => { this.props.navigation.navigate('Home') }}>
                                <Left>
                                    <Text style={{ color: '#fff' }}>Livingroom</Text>
                                </Left>
                                <Right >
                                    <Icon style={{ color: '#fff' }} name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => { props.navigation.navigate('Plan') }}>
                                <Left>
                                    <Text style={{ color: '#fff' }}>Kitchen</Text>
                                </Left>
                                <Right >
                                    <Icon style={{ color: '#fff' }} name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => { props.navigation.navigate('Device') }}>
                                <Left>
                                    <Text style={{ color: '#fff' }}>Bedroom</Text>
                                </Left>
                                <Right >
                                    <Icon style={{ color: '#fff' }} name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => { props.navigation.navigate('Statistic') }}>
                                <Left>
                                    <Text style={{ color: '#fff' }}>Bedroom</Text>
                                </Left>
                                <Right >
                                    <Icon style={{ color: '#fff' }} name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>
                    </View>

                </Content>

            </Container>
        );
    }
}
export default Roomsetting;
