import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    View,
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Title,
    Right
} from 'native-base';

class ProductScreen extends Component {
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
        const { navigation } = this.props;

        return (
            <Container>
                <Content padder>
                    {
                        products.map((product, index) => {
                            return (
                                <Card key={ index } style={{ marginBottom: 20 }}>
                                    <CardItem cardBody style={{ backgroundColor: '#fee5cb' }}>
                                        <Image source={{ uri: product.image }} style={{ height: 200, flex: 1 }} />
                                    </CardItem>
                                    <CardItem
                                        button
                                        onPress={ () => navigation.navigate('ProductInternal', { title: product.title }) }
                                    >
                                        <Left>
                                            <Text>{ product.title }</Text>
                                        </Left>
                                        <Body />
                                        <Right>
                                            <Icon name="md-arrow-dropright-circle" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            );
                        })
                    }
                </Content>
            </Container>
        );
    }
}

const products = [
    {
        title: 'Conjunto Iris',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2016/03/Flor%C3%AAncia-Prime.png'
    },
    {
        title: 'Conjunto Hortência',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Cadeira-de-balanco-em-vime-555x452.png'
    },
    {
        title: 'Conjunto Tulipa',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Cadeira-de-balanco-em-fibra-com-mola-555x452.png'
    },
    {
        title: 'Conjunto Violeta',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Conjunto-sofa-bromelkia-555x452.png'
    },
    {
        title: 'Conjunto Cravo',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Conjunto-cravo-555x452.png'
    }
];

export default ProductScreen;