//AlbumList Component is going to be used to render each album detail
// as a seperate album
//
// importing libraries to build component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';


//making a functional component because we just want to display
// data therefore
const AlbumDetail = ({ album }) => {
  const { title, thumbnail_image, artist, image, url } = album;
  const {
          thumbnailStyle,
          headingTextContainerStyle,
          albumImageStyle,
          headingTextContainerStyleText1,
          thumbnailView
        } = styles;
  return (
    <Card>
      <CardItem>
      <View style={thumbnailView}>
        <Image
         style={thumbnailStyle}
         source={{ uri: thumbnail_image }}
        />
      </View>
        <View style={headingTextContainerStyle}>
          <Text style={headingTextContainerStyleText1}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image
         style={albumImageStyle}
         source={{ uri: image }}
        />
      </CardItem>

      <CardItem>
        <Button whenPressed={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardItem>
    </Card>);
};

// We begin with styling the view that will hold both our text tags
// we add justifyContent:space around for proper spacing
// and flex direction to column
// we then add image tag to it in another view
// <Image source={{uri:json tag or url}}
// note the image does not appear to exist
// Reason being unlike its html counterpart it doesnt expand
// image tag is rendered but we can't see it till we assign size rules to it
// thats why we created a styling component thumbnailStyle to style our Image
// we notice that three references to props.album.property
// its a good practice to destructre out when more than one referenceis made to a property
// so we go for destructing here.
// first in above we only remove albums from props and not the full thing
// because we dont want to crowd it,we will destructre all properties out from
// albums and styles before render method
// now we try to add the album image ,Image
// when we add it we again see as we have not styled it ,its not showing
// our issue is how to decide the width of the image ,
// to overcoe this we use a trick in react native.
// we give image a height but set width as null and give flex=1
// after styling we saw that we were not able to scroll
// react native by default doesnt allow scrolling
// to implement scrolling we have to follow 2 steps,
// step 1 decide which jsx tags need to have the scrolling functionality
// we identify by asking what I expect to be scrollable
// over here we find its AlbumList that we want to be scrollable as its the
// Component that is actually showing list and not albumdetails
// step 2 import a default scrollview Library and implement it
// we go to albumlist and import scrollview

const styles = {
  headingTextContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headingTextContainerStyleText1: {
    fontSize: 18,
    color: '#000'
  },
  thumbnailView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  albumImageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};


//exporting AlbumDetails so can be available to other components
export default AlbumDetail;
