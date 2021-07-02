'use strict';

const express = require('express');

const FoodModels = require('../models/food');
const validator = require('../middleware/validator');

const food = new FoodModels();


const router = express.Router();

// routes
router.get('/', getFood); 
router.get('/:id',  getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

function getFood(req, res) {
  const resObj = food.read(req.params.id);
  res.status(200).json(resObj);
}
function createFood(req, res) {
  const resObj = food.create(req.body);
  res.status(200).json(resObj);
}
function updateFood(req, res) {
  const resObj = food.update(req.params.id, req.body);
  res.status(200).json(resObj);
}
function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.status(204).json(resObj);
}

module.exports = router;