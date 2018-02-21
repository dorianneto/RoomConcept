import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { StyleSheet } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import {
    View,
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

class FaqScreen extends Component {
    _renderHeader(section) {
        return (
            <View style={AccordionStyle.header}>
                <Grid>
                    <Col style={{ width: '90%'}}><Text style={AccordionStyle.headerText}>{section.title}</Text></Col>
                    <Col style={{ width: '10%'}}><Icon name='md-arrow-dropdown-circle' /></Col>
                </Grid>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View>
                <Text style={AccordionStyle.content}>{section.content}</Text>
            </View>
        );
    }

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
                        <Title>FAQ</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text style={{ padding: 10 }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Text>
                    <Accordion
                        sections={Sections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>
            </Container>
        );
    }
}

const Sections = [
    {
        title: 'Consectetur adipisicing elit?',
        content: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
    {
        title: 'Dolore magna aliqua?',
        content: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
    {
        title: 'Cillum dolore eu fugiat nulla pariatur?',
        content: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
    {
        title: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo?',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
    {
        title: 'Dolore eu fugiat nulla pariatur?',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Exercitation ullamco laboris?',
        content: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
    {
        title: 'Laboris exercitation ullamco?',
        content: 'Dolore magna incididunt ut labore et aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
];

const AccordionStyle = StyleSheet.create({
    header: {
        width: '100%',
        borderColor: '#bdc3c7',
        borderWidth: 1,
        backgroundColor: '#ecf0f1',
        padding: 20
    },
    headerText: {
        color: '#454545',
    },
    content: {
        color: '#333',
        padding: 10
    },
});

export default FaqScreen;