// we are building a custom CardItem component which gives styling to
// component together
// we want a borderBottomWidth,backgroundColor,padding, to add to our content in this component
// also we give justifyContent and flexDirection and position to our CardItem
// import from libraries
import React from 'react';
import { View } from 'react-native';

//again defining a functional component as we only need it for displaying content
const CardItem = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>);
};
//making a style object to design a style for component
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'

  }
};

//exporting CardItem to be used by other component
export default CardItem;
