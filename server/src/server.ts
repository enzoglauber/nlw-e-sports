import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    {id: 'Ads!'},
    {id: 'Ads!0'}
  ]);
});

app.listen(3333)