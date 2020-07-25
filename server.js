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
    "customerID": "codingwithjess123"
  }, {
    "customerName": "Jessica",
    "phoneNumber": "303-905-5419",
    "customerEmail": "testing123@testing.com",
    "customerID": "codingwithjess123"
  }, {
    "customerName": "Jessica",
    "phoneNumber": "303-905-5419",
    "customerEmail": "testing123@testing.com",
    "customerID": "codingwithjess123"
  }, {
    "customerName": "Jessica",
    "phoneNumber": "303-905-5419",
    "customerEmail": "testing123@testing.com",
    "customerID": "codingwithjess123"
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

// POST request
app.post("/api/reservations", function (req, res) {
  const newReservation = req.body;

  console.log(newReservation);

  reservationsWaitlist.reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});