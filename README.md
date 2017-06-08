# Portfolio #
*made by Janis 'JaRu' Rubens*

My online portfilio / CV websites code!

# Table of content #

1. [Introduction](#markdown-header-Portfolio)
2. [Table of content](#markdown-header-table of content)
3. [Dependency list explained](#markdown-header-dependency list explained)
4. [Getting started](#markdown-header-getting started)
5. [TODO](#markdown-header-todo)
6. [Contribution](#markdown-header-contribution)


# Dependency list explained #

* devDependencies - basicly evrything required to run webpack + write in ES6, standart stuff
* dependencies:
    1. "axios" - very good and simple libery for handling http requests
    2. "jest" - test framework designed for React
    3. "lodash" - utility functions for Objects and Arrays, can be removed if you feel like writing these functions your self
    4. "prop-types" - react prop-types libery, define prop-types for components, can be removed but it's bad practice not to write these
    5. "react" - obligatory
    6. "react-dom" - obligatory
    7. "react-redux" - if you will use redux this is obligatory
    8. "react-router" - handles routing for react( don't use the latest version, it's not supported by react-router-redux yet)
    9. "react-router-redux" - lets you pass router state in to redux store
    10. "redux" - if you will use redux this is obligatory
    11. "redux-thunk" - if you will load data from API in redux actions this is obligatory


 * style - i have included MUI css framework in this project as a vendor file under `/src/sass/vendor/mui.css` if you don't need it feel free to remove it.


 @IMPORTANT: By removing any of the dependencies listed here you threaten to crash the example app.( until i move it under /example folder)

# Getting started #

* Make sure you have stable version of nodejs and npm installed
* Git clone this repo by runing `git clone https://JanisRubens@bitbucket.org/JanisRubens/react-redux-starter-kit.git` in your terminal/console
* run `npm install`
* run `npm run build` - builds deployable code in `/public` folder
* run `npm run start` - starts the dev server with hot-reaload
* open `http://localhost:3000/` - to view the app
* run `npm run test` - runs tests specified in test folder
* run `npm run test:watch` - runs and watches tests specified in test folder
* Enjoy!

# TODO #



# Related #

Will add link to REST API starter kit

# Contribution #

Will add if needed
