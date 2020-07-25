// Imports
const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


const reservationsWaitlist = {
  waitlist: [{
    "customerName": "Jessica",
    "phoneNumber": "303-905-5419",
    "customerEmail": "testing123@testing.com",
    "customerID": "codingwithjess"
  }],
  reservations: [{
    "customerName": "Saima",
    "customerEmail": "saima@gmail.com",
    "phoneNumber": "979-587-0887",
    "customerID": "saimacool"
  }]
};

// Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/waitlist", function (req, res) {
  return res.json(reservationsWaitlist.waitlist);
})

app.get("/reservations", function (req, res) {
  return res.json(reservationsWaitlist.reservations);
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