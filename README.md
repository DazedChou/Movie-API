# Movie-API

## Description

In this application, we built Rest API routes for creating, retrieving, and deleting movies from a MySQL database.

## Table of Contents

- [Movie-API](#movie-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Routes implemented](#routes-implemented)
  - [Built With](#built-with)
  - [Author](#author)

## Installation

- Go to the app's [repo](https://github.com/DazedChou/Movie-API) in github and clone the app
- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- From terminal: navigate to app's directoty, cd in db folder and run:

  ```md
  source schema.sql
  source seeds.sql
  ```

- To start the server from terminal, run:

  ```md
  $ npm run
  ```

## Routes implemented

GET /api/movies

- Returns the movies from movies table

POST /api/add-movie

- Adds a new movie

Put /api/update-review

- Updates a review

Delete /api/movie/:id

- Deletes a movie

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Nodejs](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs)
- [MySQL](https://www.mysql.com/)

## Author

David Chou

- [Github](https://github.com/DazedChou)

Iman Mansour

- [Github](https://github.com/imanmansour86)
