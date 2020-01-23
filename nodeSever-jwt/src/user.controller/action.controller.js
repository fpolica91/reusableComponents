const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const router = Router();

// router.use(authMiddleware);

module.exports = {
  async action(req, res) {
    res.json({ ok: true, user: req.userId });
  }
};
