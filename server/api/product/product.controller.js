const _ = require('lodash');
mongoose = require('mongoose');
productModel = require('./product.model');
//listModel = require('../list/list.model');

exports.createProduct = function(req, res, next) {
	const newProduct = new productModel({
		name: req.body.name,
    category: req.body.category,
    image: req.body.image || '',
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
  })

	newProduct.save(function(err, product) {
		if(err) {
            console.log(err);
			return res.send(500);
		}
		return res.send(product);
	});
};
		// Update the corresponding poduct
// 		listModel.update(
// 			{ _id: card.list },
// 			{ $push: { cards: card._id } },
// 			function() {
// 				return res.send(card);
// 			}
// 		);
// 	});
// };

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
