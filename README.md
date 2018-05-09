# MusicAlbumApp

This is a very simple React Native music album app.The app is going to display a list of music albums with :

- ALbum Name
- Album Artist
- Album Cover Photo and thumbnail
- A button that redirects user to amazon page to buy the album.


This app is for beginners to learn and understand various concepts of React Native.
Concepts used and explained with comments and some notes.Comments and notes files also explain how to use that component and why we used a particular component

## Used and explained parts of React Native
* Components (Functional and class based)  
* Image, Text, Linking, ScrollView, AppRegistry, View, TouchableOpacity from react native  
* Set of custom,reusable Components :  
  ** AlbumDetail  
  ** AlbumList  
  ** Button  
  ** Card  
  ** CardItem  
  ** Header  

### Prerequisites

What things you need to install the software and how to install them  

1. React Native  
2. Node Js  

### Installing

To Install  
1. Clone this repository (or download zip and unpack)  
2. cd into the project directory  
3. to install node modules do  
 ```npm install```  
4. Setup the project in android studio using the android files (this step is needed for emulator)
5. After the project is set up in android simply start the app using
```react-native run-android``


# FileStructure

We have
  App.js as Root element which is having-
    -Header (which is in src/Components/Header)
      displays header passed as HeaderText
    -AlbumList
      function is to fetch list of Multiple AlbumDetails and display them

  we had an issue of how to display the albums which we get as json file
  The approach we chose:
    create two files
    1 AlbumDetails
      function is to fetch only details of a single album
      containing title, autor ,image etc
    2 AlbumList
      function is to fetch list of Multiple AlbumDetails and display them
    Tree looks like
    App -> AlbumList -> Multiple AlbumDetails

