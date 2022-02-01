const mysql = require("mysql2");
const express = require("express");

//configure the app to use express and port
const PORT = process.env.PORT || 3000;
const app = express();

//set express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to db
var connection = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "",
    database: "movies_db",
  },
  console.log(`Connected to the empoloyeeTracker database.`)
);

//get all movies
app.get("/api/movies", (req, res) => {
  connection.query(`SELECT * from movies;`, function (err, results) {
    console.log(results);
    res.json(results);
  });
});

// add a new movie
app.post("/api/add-movie", (req, res) => {
  console.log("req body", req.body.movie_name);
  const { movie_name } = req.body;
  connection.query(
    `INSERT INTO movies (movie_name) VALUES("${movie_name}");`,

    function (err, results) {
      console.log(results);
    }
  );
  connection.query(`SELECT * from movies;`, function (err, results) {
    console.log(results);
    res.json(results);
  });
});
//configure app to listen on specified port above
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
