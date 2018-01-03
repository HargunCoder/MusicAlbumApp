//importing libraries for making a Compoenent

import React,{ Component} from 'react';
import {Text ,AppRegistry} from 'react-native';
//importing Header from src,components
import Header from './src/Components/Header';

//creating Compoenent

export default class App extends Component{
  render(){
    return(
      <Header/>
    );
  }
}

//registering component,only done for root Component

AppRegistry.registerComponent('Albums',() =>'App');
