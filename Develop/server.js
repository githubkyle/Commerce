const express = require("express");
const routes = require("./routes");
// import sequelize connection
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

const db = mysql.createConnection(
  {
    host: "localhost",

    user: "root",

    password: process.env.DB_PASSWORD,
    database: "ecommerce_db"
  },
  console.log(`Connected to the ecommerce_db database.`)
);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
