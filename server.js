// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
const reservations = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/reservations/:id", function (req, res) {
  const chosen = req.params.reservations;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservations = req.body;

  // Using a RegEx Pattern to remove spaces from newReservations
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newReservations.routeName = newReservations.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservations);

  reservations.push(newReservations);

  //send true if reservation
  res.json(newReservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});