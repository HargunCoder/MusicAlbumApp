//AlbumList Component is going to be used to render each album detail
// as a seperate album
//
// importing libraries to build component
import React from 'react';
import { Text, View } from 'react-native';

//making a functional component because we just want to display
// data therefore
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};
//exporting AlbumDetails so can be available to other components
export default AlbumDetail;
