const { Router } = require("express");
const UserController = require("../user.controller/auth.controller");
const validator = require("../validator");
const router = Router();

router.post("/register", validator.create, UserController.create);
router.post("/login", UserController.authenticate);

module.exports = router;
