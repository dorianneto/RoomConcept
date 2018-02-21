import React, { Component } from "react";
import Profile from "./Profile";
import EditScreenOne from "./EditScreenOne";
import EditScreenTwo from "./EditScreenTwo";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Profile: { screen: Profile },
  EditScreenOne: { screen: EditScreenOne },
  EditScreenTwo: { screen: EditScreenTwo }
}));
