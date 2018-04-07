const router = require("express").Router();
const productRoutes = require("./product");
const makeupRoutes = require("./makeup");

// Product routes
router.use("/products", productRoutes);

router.use("/makeup", makeupRoutes);

module.exports = router;
