const express = require ('express');

const bodyParser = require('body-parser');

var cors = require('cors');

require('babel-register');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const api = require('./routes/api');

app.use('/api', api);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
