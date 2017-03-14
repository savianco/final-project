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
  img: {
    type: String, default: ''  ///  PDTE. DE CAMBIAR ////
  },
  description: {
    type: String,
    required: [true, 'The product description is required']
  },
  price: {
    type: String,
    required: [true, 'The product price is required']
  },
  stock: {
    type: String,
    required: [true, 'The product stock is required']
  },
  logo1: {
    type: String, default: ''  ///  PDTE. DE CAMBIAR ////
  },
  logo2: {
    type: String, default: ''  ///  PDTE. DE CAMBIAR ////
  }//,
  // timestamps: {
  //   createdAt: "created_at",
  //   updatedAt: "updated_at"
  // }
});

module.exports = mongoose.model('Product', productSchema);
