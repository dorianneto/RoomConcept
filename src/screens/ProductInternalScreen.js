import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    H1,
    View,
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Badge,
    Icon,
    Left,
    Body,
    Title,
    Right
} from 'native-base';

class ProductInternalScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header androidStatusBarColor='#27ae60' style={{ backgroundColor: "#2ecc71" }}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{ navigation.state.params.title }</Title>
                </Body>
                <Right />
            </Header>
        )
    })

    render() {
        const { title } = this.props.navigation.state.params;

        return (
            <Container>
                <Content>
                    <View style={{ backgroundColor: '#fee5cb' }}>
                        <Image source={{ uri: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Cadeira-de-balanco-em-vime-555x452.png' }} style={{ height: 200, flex: 1 }} />
                    </View>
                    <View padder>
                        <H1>{ title }</H1>
                        <Text>
                        {`
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur vel similique placeat atque fugit tempora.

Deleniti voluptas quibusdam voluptates, doloremque accusantium consequuntur debitis. Laudantium accusantium, itaque, consectetur tenetur neque alias!
                        `}
                        </Text>
                        <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row' }}>
                            <Badge info>
                                <Text>L 38cm</Text>
                            </Badge>
                            <Badge info>
                                <Text>AE 75cm</Text>
                            </Badge>
                            <Badge info>
                                <Text>AA 35cm</Text>
                            </Badge>
                            <Badge info>
                                <Text>PF 37cm</Text>
                            </Badge>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ProductInternalScreen;