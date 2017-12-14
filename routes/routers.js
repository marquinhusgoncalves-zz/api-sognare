const express = require('express');
const request = require('request');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
router.get('/', (req, res) => {
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q='
  const search = req.query.search;
  request(url + search, (error, response, body) => {
    res.send(JSON.parse(body))
  });
});

router.get('/:id', (req, res) => {
  const url = 'https://api.mercadolibre.com/items/'
  const id = req.params.id;
  request(url + id, (error, response, body) => {
    res.send(JSON.parse(body))
  });
});

router.get('/:id/description', (req, res) => {
  const url = 'https://api.mercadolibre.com/items/'
  const id = req.params.id;
  request(url + id + '/description', (error, response, body) => {
    res.send(JSON.parse(body))
  });
});

module.exports = router;
