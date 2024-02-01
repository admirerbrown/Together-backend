const express = require("express");
const causesController = require("../controllers/causes");

const router = express.Router();


router.post("/add_cause", causesController.addCause);
router.get("/causes", causesController.getAllCauses);
router.put("/update_cause", causesController.updateCauseProgress);


module.exports = router;