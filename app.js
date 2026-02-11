// Initialize APM Agent
const apm = require('elastic-apm-node').start({
  serviceName: 'openshift-test-app',
  serverUrl: 'http://13.60.28.212:8200',
  active: true
});

const express = require('express');
const app = express();
const port = 8080; // OpenShift standard port

app.get('/', (req, res) => {
  res.send('APM Trace Sent! Check your Kibana dashboard.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});