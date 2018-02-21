import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
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

import ProductScreen from './ProductScreen';
import ProductInternalScreen from './ProductInternalScreen';

class CategoryScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header androidStatusBarColor='#27ae60' style={{ backgroundColor: "#2ecc71" }}>
                <Left>
                    <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Categorias</Title>
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
                        categories.map((category, index) => {
                            return (
                                <Card key={ index }>
                                    <CardItem
                                        button
                                        onPress={ () => navigation.navigate('Product', { title: category.title }) }
                                    >
                                        <Left>
                                            <Text>{ category.title }</Text>
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

const categories = [
    {
        title: 'Prime',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2016/03/Flor%C3%AAncia-Prime.png'
    },
    {
        title: 'Rattan',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Cadeira-de-balanco-em-vime-555x452.png'
    },
    {
        title: 'Tubular',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Cadeira-de-balanco-em-fibra-com-mola-555x452.png'
    },
    {
        title: 'Fibra',
        image: 'http://www.comercialfreire.com.br/wp-content/uploads/2015/11/Conjunto-sofa-bromelkia-555x452.png'
    }
];

const ProductStack = StackNavigator(
    {
        Category: { screen: CategoryScreen },
        Product: { screen: ProductScreen },
        ProductInternal: { screen: ProductInternalScreen }
    },
    {
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: true,
        }
    }
);

export default ProductStack;