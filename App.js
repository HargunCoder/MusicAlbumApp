//importing libraries for making a Compoenent

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
//importing Header from src,components
import Header from './src/Components/Header';
//importing AlbumList from src,components
import AlbumList from './src/Components/AlbumList.js';

//creating Compoenent
// we have made header reusable it needs HeaderText to display what will be
// displayed by header
//we cant have two jsx tags at a single time,here header and AlbumList
//it is like returning 1 and 2 so we need to use a view tag
// when we need to return multiple tags together

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header HeaderText='Albums' />
        <AlbumList />
      </View>

    );
  }
}

//registering component,only done for root Component

AppRegistry.registerComponent('Albums', () => 'App');
