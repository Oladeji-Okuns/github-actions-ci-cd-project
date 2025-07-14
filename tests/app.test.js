const request = require('supertest');
const express = require('express');

const app = express();

// Define the endpoint with UTF-8 response
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.send('í¸€ Hello from your GitHub Actions CI/CD App!');
});

describe('GET /', () => {
  it('should return greeting message with emoji', async () => {
    const res = await request(app).get('/');

    // Optional: confirm content type
    expect(res.header['content-type']).toMatch(/text\/plain/);

    // Expect exact emoji message
    expect(res.text).toBe('í¸€ Hello from your GitHub Actions CI/CD App!');
  });
});

