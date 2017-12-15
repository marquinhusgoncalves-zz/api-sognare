import { searchModel, itemModel } from './filterData';

const express = require('express');

const request = require('request');

const fetch = require('node-fetch');

const router = express.Router();

const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
const env = require('../env.json');

router.get('/', (req, res) => {
  request(`${env.hostname}${env.endpoints.search}?q=${req.query.search}`, (error, response, body) => {
    const data = JSON.parse(body);
    res.json([data].map(searchModel));
  });
});

router.get('/:id', async (req, res) => {
  const response = await fetch(`${env.hostname}${env.endpoints.product}/${req.params.id}`);
  const data = await response.json();

  const responseDescription = await fetch(`${env.hostname}${env.endpoints.product}/${req.params.id}${env.endpoints.description}`);
  const dataDescription = await responseDescription.json();
  const itemData = [data].map(itemModel);

  if (itemData[0]) {
    itemData[0].item.description = dataDescription ? dataDescription.plain_text : '';
  }

  res.json(itemData);
});

module.exports = router;
