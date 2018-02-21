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

class AboutScreen extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Header androidStatusBarColor='#27ae60' style={{ backgroundColor: "#2ecc71" }}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Sobre</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Body>
                        <Text>
                        {`
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        `}
                        </Text>
                    </Body>
                </Content>
            </Container>
        );
    }
}

export default AboutScreen;