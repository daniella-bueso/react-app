const router = require("express").Router();
const makeupController = require("../../controllers/makeupController");

// Matches with "/api/makeup"
router
  .route("/")
  .get(makeupController.findAll);

module.exports = router;