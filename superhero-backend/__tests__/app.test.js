const request = require('supertest');
const express = require('express');
const HeroesRouter = require('../routes/heroRoutes');

const app = express();
app.use(express.json());
app.use('/api/v1/superheroes', HeroesRouter);


// Test the Hero Routes GET and POST request 
describe('Hero Routes', () => {
  it('should get all heroes', async () => {
    const response = await request(app).get('/api/v1/superheroes');
    expect(response.status).toBe(200);
  });

  it('should create a new hero', async () => {
    const newHero = { name: 'New Hero', superpower: 'Invisibility', humility_score: 9 };
    const response = await request(app).post('/api/v1/superheroes').send(newHero);
    expect(response.status).toBe(201);
  });
});