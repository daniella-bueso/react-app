import axios from "axios";

export default {
  getProducts: function () {
    return axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
  },
  getProduct: function (brand, product_type) {
    return axios.get("http://makeup-api.herokuapp.com/api/v1/products.json" + brand + product_type);
  },
  // Saves a product to the database
  saveProduct: function(makeupData) {
    return axios.post("/api/makeup", makeupData);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/makeup/" + id);
  },
}