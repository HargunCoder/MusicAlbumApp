//importing Library to Build Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//making component
// we will use destructing to use styles
// we can also use style=styles.textStyle but we dont use it to avoid duplication
//
// we will want to make this header reusable,so it can be used over and over again
// so instead of letting header decide what will be displayed app component will decide
// for this we will use props
// whenever we want to pass properties from parent to child
// over here from app to header we use props or properties
// step1 decide the variable or value we want to pass or provide by parent
// step 2 provide reference to value passed by parent by props obejct
// step 3 we make sure the parent provides the props
// props is a java script variable so we use {} when using it
class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle} >
        <Text style={textStyle}>{this.props.HeaderText}</Text>
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
// backgroundColor gives a backgroundColor to the element
// height sets the height for the element
// padding gives space between content and margin
// paddingTop, paddingBottom, paddingLeft, paddingRight are the some options
// for ios
// shadowColor sets the color for App
// shadowOpacity decides how dark a shadow is
// shadowOffset gives width and height to shadow
// for android
// elevation gives shadow effect

const styles = {

  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative'

  },

  textStyle: {
    fontSize: 25,


  }
};


//exporting component to make available for other files to use

export default Header;
