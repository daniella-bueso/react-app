import axios from "axios";

export default {
  // Gets all makeup
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the book with the given id
  getProducts: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the book with the given id
  deleteProducts: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a book to the database
  saveProducts: function(productsData) {
    return axios.post("/api/products", productsData);
  }
};
