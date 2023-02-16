const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //create new user

      const newUSer = await new User
    } catch (err) {
      res.status(500);
    }
  },
};

module.exports = authController;
