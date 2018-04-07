const axios = require("axios");
const db = require("../models");

// findAll searches the Makeup API and returns entries not saved
module.exports = {
  findAll: function(req, res) {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json", {
        params
      })
      .then(response => {
        db.Product
          .find()
          .then(dbProducts =>
            response.data.response.docs.filter(Product =>
              dbProducts.every(
                dbProduct => dbProduct._id.toString() !== Product.id
              )
            )
          )
          .then(Products => res.json(Products))
          .catch(err => res.status(422).json(err));
      });
  }
};