const express = require("express");
const router = express.Router();
const v1 = require("./controllers/v1/index");
//console.log("routes");
router.use("/v1", v1);

module.exports = router;
