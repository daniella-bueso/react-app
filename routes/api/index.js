const router = require("express").Router();
const makeupRoutes = require("./makeup");

// Makeup routes
router.use("/makeup", makeupRoutes);

module.exports = router;
