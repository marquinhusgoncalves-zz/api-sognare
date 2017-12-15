const express = require ('express');

const bodyParser = require('body-parser');

require('babel-register');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./routes/api');

app.use('/api', api);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
