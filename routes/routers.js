const express = require('express');
const request = require('request');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
const env = require('../env.json')

router.get('/', (req, res) => {
  request(`${env.hostname}${env.endpoints.search}?q=${req.query.search}`, (error, response, body) => {
    res.send(JSON.parse(body))
  });
});

router.get('/:id', (req, res) => {
  request(`${env.hostname}${env.endpoints.product}/${req.params.id}`, (error, response, body) => {
    res.send(JSON.parse(body))
  });
});

router.get('/:id/description', (req, res) => {
  request(`${env.hostname}${env.endpoints.product}/${req.params.id}${env.endpoints.product}`, (error, response, body) => {
    res.send(JSON.parse(body))
  });
});

module.exports = router;
