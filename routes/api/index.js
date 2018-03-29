const router = require("express").Router();
const makeupRoutes = require("./makeup");

// Makeup routes
router.use("/products", makeupRoutes);

module.exports = router;
