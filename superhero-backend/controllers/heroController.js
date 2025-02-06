const fs = require('fs');
const path = require('path');
const Hero = require('../models/heroModel');


// create a data directory and a heroes.json file if it doesn't exist
const dataDir = path.join(__dirname, '../data');
const filePath = path.join(dataDir, 'heroes.json');

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

// read the heroes.json file
const heroes = JSON.parse(fs.readFileSync(filePath, 'utf8'));


exports.getAllHeroes = (req, res) => {
  try {
    // sort heroes by humility score in descending order
    const sortedHeroes = heroes.sort((a, b) => b.humility_score - a.humility_score);
    res.status(200).json({
      status: "success",
      results: sortedHeroes.length,
      data: {
        heroes: sortedHeroes,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.createHero = (req, res) => {
    try {
        const { name, superpower, humility_score } = req.body;
        const newHero = new Hero(name, superpower, humility_score);
        heroes.push(newHero);

        // write the updated heroes array to the heroes.json file
        fs.writeFileSync(filePath, JSON.stringify(heroes));
        res.status(201).json({
            status: 'success',
            data: {
                hero: newHero,
            },
        });
    } catch (error) {   
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
};
