//AlbumList Component is going to be used to render each album detail
// as a seperate album
//
// importing libraries to build component
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

//making a functional component because we just want to display
// data therefore
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardItem>
        <Text>{props.album.title}</Text>
      </CardItem>
    </Card>);
};
//exporting AlbumDetails so can be available to other components
export default AlbumDetail;
