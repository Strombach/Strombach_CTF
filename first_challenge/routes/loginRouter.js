const express = require("express");
const controller = require("../controllers/loginController");

const router = express.Router();

router.get("/", controller.index);

router.post("/", controller.loginPost);

module.exports = router;
