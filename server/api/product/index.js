'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/', controller.listProducts);
router.post('/', controller.createProduct);
router.get('/:id', controller.detailProduct);
router.put('/:id', controller.editProduct);
router.delete('/:id', controller.removeProduct);

module.exports = router;
