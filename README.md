# MusicAlbumApp
A React Native music album app
It is going to display a list of music albums that user can look at and buy.
This app is for beginners to learn and understand various concepts of React Native.
The code conatins lot of comments and notes files to explain how to use that component and why we used a particular component

FileStructure

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

