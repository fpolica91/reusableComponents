const User = require("../user.models/User.model");
const bcrypt = require("bcryptjs");
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
  }
};
