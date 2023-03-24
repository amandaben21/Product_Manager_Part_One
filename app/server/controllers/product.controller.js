const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({product: newProduct})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}