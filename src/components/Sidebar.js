import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Footer, Container, Button, Text, List, ListItem, Left, Body, Right, Icon } from 'native-base';

class Sidebar extends Component {
    render() {
        const { navigation } = this.props;
        const menu = [
            {
                'icon': 'md-home',
                'screen': 'Home',
                'title': 'Home'
            },
            {
                'icon': 'md-bookmarks',
                'screen': 'Category',
                'title': 'Categorias'
            },
            {
                'icon': 'md-help-circle',
                'screen': 'Faq',
                'title': 'FAQ'
            },
            {
                'icon': 'md-information-circle',
                'screen': 'About',
                'title': 'Sobre'
            }
        ];

        return (
            <Container>
                <Content style={{ backgroundColor:'#FFFFFF' }}>
                    <Image source={{uri: 'https://orig00.deviantart.net/e0c4/f/2016/140/5/5/flat_mountains_wallpaper__4k__by_wolfiyedits-da35cgi.png'}} style={{height: 150, width: null}} />
                    <List
                        dataArray={ menu }
                        renderRow={ (item) =>
                            <ListItem
                                icon
                                button
                                onPress={ () => navigation.navigate(item.screen) }
                            >
                                <Left>
                                    <Icon name={ item.icon } />
                                </Left>
                                <Body>
                                    <Text>{ item.title }</Text>
                                </Body>
                                <Right />
                            </ListItem>
                        } />
                </Content>
                <Footer style={{ backgroundColor:'#FFFFFF', height: 30 }}>
                    <Text style={{ fontSize: 12 }}>v0.0.1</Text>
                </Footer>
            </Container>
        );
    }
}

export default Sidebar;
