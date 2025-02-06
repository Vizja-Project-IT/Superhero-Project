const express = require('express');
const HeroesRouter = require('./routes/heroRoutes');
const cors = require('cors');

const app = express();  // create an express app

app.use(express.json()); // enable json parsing

const whitelist = ['http://localhost:3000']; // list of allowed domains 

// configure CORS
const corsOptions = { 
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

app.use(cors(corsOptions)); // enable CORS

app.use("/api/v1/superheroes", HeroesRouter); // use the router

module.exports = app;