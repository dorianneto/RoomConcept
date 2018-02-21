import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import FaqScreen from '../screens/FaqScreen';
import CategoryScreen from '../screens/CategoryScreen';

import Sidebar from '../components/Sidebar';

const ScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        About: { screen: AboutScreen },
        Faq: { screen: FaqScreen },
        Category: { screen: CategoryScreen }
    },
    {
        contentComponent: (props) => <Sidebar { ...props } />
    }
);

export default ScreenRouter;