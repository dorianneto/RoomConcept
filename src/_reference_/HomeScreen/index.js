import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import MainScreenNavigator from "../ChatScreen/index";
import Profile from "../ProfileScreen/index";
import SideBar from "../SideBar/SideBar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
