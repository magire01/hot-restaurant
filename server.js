const express = require("express");
const path = require("path");
const { fstat, fstatSync } = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
// const waitlist = [
//   {
//   "customerName": "Jane Doe",
//   "phoneNumber": "888-555-3838",
//   "customerEmail": "Jane@doe.com",
//   "customerID": "4"
// },
// {
//   "customerName": "Jane Doe",
//   "phoneNumber": "888-555-3838",
//   "customerEmail": "Jane@doe.com",
//   "customerID": "4"
// }]

const reservations = [{
  "customerName": "Saima",
  "customerEmail": "saima@gmail.com",
  "phoneNumber": "979-587-0887",
  "customerID": "saimacool"
}, {
  "customerName": "Jessica",
  "phoneNumber": "303-905-5419",
  "customerEmail": "testing123@testing.com",
  "customerID": "codingwithjess"
}, {
  "customerName": "wyatt earp",
  "phoneNumber": "55555555",
  "customerEmail": "wyatt@wyatt.com",
  "customerID": "1881"
}, {
  "customerName": "Jane Doe",
  "phoneNumber": "888-555-3838",
  "customerEmail": "Jane@doe.com",
  "customerID": "4"
}];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
  fstatSync(data);
});

app.get("/waitlist", function (req, res) {
  return res.json(reservations[i > 4])
})

app.get("/reservations", function (req, res) {
  return res.json(reservations);
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