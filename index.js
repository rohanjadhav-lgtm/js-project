const apm = require('elastic-apm-node').start({
  serviceName: 'openshift-js-app',
  serverUrl: 'http://13.60.28.212:8200',
  active: true
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Trace sent to APM Server!');
});

app.listen(8080, () => {
  console.log('App is running on port 8080');
});
