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

app.get("/api/movies", (req, res) => {
  connection.query(`SELECT * from movies;`, function (err, results) {
    console.log(results);
  });
});
//configure app to listen on specified port above
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
