const User = require("../user.models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const { validationResult } = require("express-validator");

module.exports = {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.json({ error: errors.array() });

    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    const encrypted = bcrypt.hashSync(password, 10);
    if (!user) {
      user = await User.create({
        email,
        password: encrypted
      });
    }
    return res.json(user);
  },

  async authenticate(req, res) {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");
    if (!user) return res.json({ message: "user not found" });
    if (!(await bcrypt.compare(password, user.password))) {
      res.json({ message: "Wrong password" });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400
    });

    res.json({
      user: user,
      token: token
    });
  }
};
