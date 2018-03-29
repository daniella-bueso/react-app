const router = require("express").Router();
const makeupController = require("../../controllers/makeupController");

// Matches with "/api/makeup"
router.route("/")
  .get(makeupController.findAll)
  .post(makeupController.create);

// Matches with "/api/makeup/:id"
router
  .route("/:id")
  .get(makeupController.findById)
  .put(makeupController.update)
  .delete(makeupController.remove);

module.exports = router;
