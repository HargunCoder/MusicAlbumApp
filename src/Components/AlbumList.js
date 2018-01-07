// We are creating a component that is responsible for displaying
// List of Albums is fetched and displayed by this Compoenent
// It is rendering several albumdetails components

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
import AlbumDetail from './AlbumDetail';
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
// we will now create a function to render the Albums
// renderAlbums initially will fetch code from response and shwo as title
// what we will do is use map function to get content out of this.state.Albums
// its like the python function .album is like x,we use it to do operations inside map
// we have to put {} after text because with jsx when we use variables or functions
// if we dont use {} it considers as text
// old render method before we use AlbumDetails
// renderAlbums() {
//   return this.state.albums.map((album) => <Text key={album.title}>{album.title}</Text>);
// }
//key is something which is needed above
// whenever we show components are in an array,each component inside of array must have
// a key property associated with it.
// this is performance based,so it can intelligently rerendering a particular component
// we add key = {keyid}
// this key must be unique and not repeated throughout.
//Keys help React identify which items have changed, are added, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable identity:
//The best way to pick a key is to use a string that uniquely
//identifies a list item among its siblings
// Most often you would use IDs from your data as keys:
// li key={todo.id}
//When you don’t have stable IDs for rendered items,
// you may use the item index as a key as a last resort:
//eg we used above album.title
//We don’t recommend using indexes for keys if the order of items may change.
// This can negatively impact performance and may cause issues with component state.
// using AlbumDetails in new renderAlbums methods
renderAlbums() {
  return this.state.albums.map((album) =>
  <AlbumDetail key={album.title} album={album} />);
}
//we want our View to be scrollable so we replace the view tags with ScrollView
// we were facing issue with scrolling,to overcome This
// we need to go to view containing this view,here its the root views
// and give it style flex:1,this tells react please give all the space to this view
render() {
    //checking the state before and after rendering of data
    console.log(this.state);
    return (
      //<View>
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
      //</View>
    );
  }

}

export default AlbumList;
