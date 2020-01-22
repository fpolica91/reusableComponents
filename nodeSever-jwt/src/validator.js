const { check } = require("express-validator");

exports.create = [
  check("email").isEmail(),
  check("password").isLength({ min: 5 })
];
