const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('&#128512; Hello from your GitHub Actions CI/CD App!'));

describe('GET /', () => {
  it('should return greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('&#128512; Hello from your GitHub Actions CI/CD App!');
  });
});

