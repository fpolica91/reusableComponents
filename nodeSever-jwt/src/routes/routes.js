const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const UserController = require("../user.controller/auth.controller");
const UserActionController = require("../user.controller/action.controller");
const validator = require("../validator");
const router = Router();

router.post("/register", validator.create, UserController.create);
router.post("/login", UserController.authenticate);
router.post("/forgot_password", UserActionController.forgot);
router.post("/recover", UserActionController.resetPassword);

router.use(authMiddleware);
router.use(authMiddleware).get("/test", UserActionController.action);

module.exports = router;
