// making a card component to render albumdetails
// We could have nested views inside views but we chose a
// card main component having lots of carditem components inside
// we do this to make it reusable and avoiding styling every time we make a component
// importing libraries to make component
import React from 'react';
import { View } from 'react-native';

// we use a functional component because we just want to render the content not
// use the lifecycle Methods
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>
  );
};
const styles = {
  containerStyle: {
    borderWidth: 1,           //put borderWidth of given thickness
    borderColor: '#000',      //put borderColor as black
    borderRadius: 2,          //rounds borders at the edges
    borderBottomWidth: 0,     //no borderBottomWidth as in cards styling we dont want it
    //setting shadow for android
    elevation: 2,
    //setting shadow for ios
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
// exporting card to be used by other components
export default Card;
// we now need to come up with a system that we can pass a component to another
// component like View can render Text within it
// till no we only know to pass data as props so we need to handle this issues
// so we go to AlbumDetails and remove view component and put Card component
// now we need to instruct Card how to render any views as children
// so the magic here is any components we passed will be passed as props object
// so we using props.children we can ask card to load the views
