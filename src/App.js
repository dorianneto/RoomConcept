import React, { Component } from 'react';
import SplashScreen from '@remobile/react-native-splashscreen'

import HomeScreen from './config/router';

class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return <HomeScreen />
    }
}

export default App;