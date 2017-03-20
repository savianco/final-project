const _ = require('lodash');
mongoose = require('mongoose');
productModel = require('./product.model');

exports.createProduct = function(req, res, next) {
	const newProduct = new productModel({
		name: req.body.name,
    category: req.body.category,
    img: req.body.img || '',
    description: req.body.description,
    price: req.body.price,
		stock: req.body.stock,
		logo1: req.body.logo1 || '',
		logo2: req.body.logo2 || '',
  })

	newProduct.save(function(err, product) {
		if(err) {
            console.log(err);
			return res.send(500);
		}
		return res.send(product);
	});
};


exports.detailProduct = function(req, res, next){
	productModel.findById(req.params.id, (err, result)=>{
		if(err){
			return res.status(500).json({message: "Cannot find product with id " + req.params.id});
		}
		return res.status(200).json(result);
	});
}

exports.listProducts = function(req, res, next){
	productModel.find({},(err, result)=>{
		if(err){
			return res.status(500).json({message: "Cannot list products"});
		}
		return res.status(200).json(result);
	});
}

exports.editProduct = function(req, res ,next) {
	const productId = req.params.id;
	productModel
		.findByIdAndUpdate(productId, { $set: req.body }, function(err, product) {
			if(err) {
				return res.status(400).json({ message: 'Unable to update product', error: err });
			}

			res.json({ message: 'product successfully updated', product: product });
		});
};



exports.removeProduct = function (req, res) {
    productModel
        .findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({ message: 'impossible to remove the product', error: err });
            };

            res.json({ message: 'product removed successfully' });
        });
};

exports.cartProducts = function (req, res, next){
		let productIds = req.body;
		console.log(productIds);
		productModel.find({_id: {$in: productIds}}, (err, products)=>{
			if (err){
				 console.log(err);
				 return next(err);
			}
			console.log("received from db ", products);
			res.json(products);
		});
};
