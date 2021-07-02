'use strict';

const express = require('express');

const ClothesModels = require('../models/clothes');
const validator = require('../middleware/validator');

const clothes = new ClothesModels();


const router = express.Router();

// routes
router.get('/', getClothes); 
router.get('/:id',  getClothes);
router.post('/', createCloth);
router.put('/:id', updateCloth);
router.delete('/:id', deleteCloth);

function getClothes(req, res) {
  const resObj = clothes.read(req.params.id);
  res.status(200).json(resObj);
}
function createCloth(req, res) {
  const resObj = clothes.create(req.body);
  res.status(200).json(resObj);
}
function updateCloth(req, res) {
  const resObj = clothes.update(req.params.id, req.body);
  res.status(200).json(resObj);
}
function deleteCloth(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.status(204).json(resObj);
}

module.exports = router;

