const { v4: uuidv4 } = require('uuid');

class Hero {
    constructor(name, superpower, humility_score) {
        // if any of these are missing, throw an error
        if (!name || !superpower || !humility_score) { 
            throw new Error('Missing data: name, superpower, and humility_score are required');
        }

        // if any of these are not the correct data type, throw an error
        if (typeof name !== 'string' || typeof superpower !== 'string' || typeof humility_score !== 'number') { 
            throw new Error('Invalid data types');
        }

        // validate humility score is between 1 and 10
        if (humility_score < 1 || humility_score > 10) { 
            throw new Error('Humility score must be between 1 and 10');
        }

        this.id = uuidv4();
        this.name = name;
        this.superpower = superpower;
        this.humility_score = humility_score;
    }
}

module.exports = Hero;