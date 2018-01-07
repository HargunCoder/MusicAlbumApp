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


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc




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

