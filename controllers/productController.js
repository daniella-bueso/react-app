const db = require("../models");

// Defining methods for the makeupController
module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ date: -1 })
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const product = {
      id: req.body.id,
      brand: req.body.brand,
      product_type: req.body.category,
      name: req.body.name,
      url: req.body,product_link,
      price: req.body.price
    };
    db.Product
      .create(product)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ id: req.params.id })
      .then(dbProduct => dbProduct.remove())
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  }
};
