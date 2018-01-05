// We are creating a component that is responsible for displaying
// List of Albums is fetched and displayed by this Compoenent
// It is rendering several albumdetails components

import React, { Component } from 'react';
import { Text, View } from 'react-native';
//This is another way of defining a Compoenent.
//A complete documentation is available on what the two methods are
// and how to use them
// we converted this t a class based component because
// this will handle data fetching
// we will use componentWillMount lifecycyle method to call http request
// it runs before renders and
// the only method that runs before server rendering so perfect for our purpose
import axios from 'axios';
//first we installed axios which we are going to use for http requests
// npm install --save axios
// we make a get request using
// axios.get('url')
// we add .then to this which is a promise that we have after our json requests
// is executed our function will be called
// issue we encountered is the albumlist ,header app loads before we
// get a chance to return result of json request
// we now need to bring a change in timeline
// we will use component state to solve This
// state is how react handles changing content of component
// for example we can have two states empty and one with Albums
// the thing that makes this difference between these two states is fetching of data
// we will use component level state so that component updates when we fetch data
// state rerenders on changing each time
// step 1 : set an empty or initial state
//  we set this using class level property
//  state = {};
// step 2 : when we fetch our data we tell state to update
// once our state is made it has property this.state
// we now need to update the state
// we use this.setState(object);
// we dont use state={} ever except in initial state
// basically in a state property we had an empty array albums in which after updating
// we put json reply in response object to albums
// step 3 : we make sure the component uses the state
// we use console.log(this.state)
// we have a requestHandler called setState which just rerenders AlbumList
// only when we update state and add data to albums
class AlbumList extends Component {

//initial or empty states
// we say we have albums which is  an empty array
state = { albums: [] };
//we make the http request here
//response contains the object json returns
componentWillMount() {
  axios.get('http://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({ albums: response.data }));
}


  render() {
    //checking the state before and after rendering of data
    console.log(this.state);
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }

}

export default AlbumList;
