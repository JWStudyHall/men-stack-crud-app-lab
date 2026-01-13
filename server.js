const express = require("express");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const db = require("./db/connection.js");
const Planets = require("./models/planets.js");

const app = express();

//Middleware

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

//Routes (GET,POST,PUT,DELETE) CRUD
//GET
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//POST 
app.get("/planets/new", (req, res) => {
  res.render("planets/new.ejs");
});
app.post("/planets", async (req, res) => {
  if (req.body.hasAMoon === "on") {
    req.body.hasAMoon = true;
  } else {
    req.body.hasAMoon = false;
  }
  await Planets.create(req.body);
  res.redirect("/planets/new");
});

//DB and Server Connection
db.on("connected", () => {
  console.clear();
  console.log("You are connected to your MongoDB Database.");
  app.listen(3000, () => {
    console.log("You're server is running!");
  });
});
