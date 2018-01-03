//importing Library to Build Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//making component
// we will use destructing to use styles
// we can also use style=styles.textStyle but we dont use it to avoid duplication


class Header extends Component {
  render () {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle} >
        <Text style={textStyle}>Albums</Text>
      </View>
    );
  }
}

// creating styling Compoenent to style our header component
// we will add an object styles for containing all styles
// the style object will have a number of js properties for styling our App
// textStyle is object to style text of our app
// fontSize changes font of text
//
//viewStyle is used to style the view using this we will style our view
//we use the concept of flexbox,a css technique for styling our content
// we use two properties alignItems-for horizontal aligning of content
// justifyContent for vertical aligning of content
// flex-start sets a item to start flex-center to center and flex-end to end
// depending on with what it is used it can be start-left,top,end-right,bottom
const styles = {

  viewStyle: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center'

  },

  textStyle: {
    fontSize: 20

  }
};


//exporting component to make available for other files to use

export default Header;
