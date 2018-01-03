//importing libraries for making a Compoenent

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//importing Header from src,components
import Header from './src/Components/Header';

//creating Compoenent
// we have made header reusable it needs HeaderText to display what will be
// displayed by header

export default class App extends Component {
  render() {
    return (
      <Header HeaderText='Albums' />


    );
  }
}

//registering component,only done for root Component

AppRegistry.registerComponent('Albums', () => 'App');
