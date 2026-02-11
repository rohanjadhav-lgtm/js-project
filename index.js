const apm = require('elastic-apm-node').start({
  serviceName: 'openshift-js-app',
  serverUrl: 'http://13.60.28.212:8200',
  active: true
});

const express = require('express');
const app = express();

// Add these to your index.js
app.post('/api/data', (req, res) => {
  res.status(201).send('Data received via POST');
});

app.get('/error', (req, res) => {
  throw new Error('Something went wrong!'); // This triggers an Error Trace
});

app.listen(8080, () => {
  console.log('App is running on port 8080');
});

