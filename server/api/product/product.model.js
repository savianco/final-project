'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The product name is required']
  },
  category: {
    type: String,
    required: [true, 'The product category is required']
  },
  image: {
    type: String, default: ''  ///  PDTE. DE CAMBIAR ////
  },
  description: {
    type: String,
    required: [true, 'The product description is required']
  },
  price: {
    type: Number,
    required: [true, 'The product price is required']
  },
  stock: {
    type: Number,
    required: [true, 'The product stock is required']
  }//,
  // timestamps: {
  //   createdAt: "created_at",
  //   updatedAt: "updated_at"
  // }
});

module.exports = mongoose.model('Product', productSchema);
