import React, { Component } from 'react';
import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Right,
    Title,
    Text,
    Body,
    Content
} from 'native-base';

class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Header androidStatusBarColor='#27ae60' style={{ backgroundColor: "#2ecc71" }}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={ () => navigation.navigate('DrawerOpen') } />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Button block iconLeft primary>
                        <Icon name='md-refresh' />
                        <Text>Sincronizar</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;