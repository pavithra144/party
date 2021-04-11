const { check, validationResult } = require("express-validator");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//user model
const User = require("../models/User");

router.post(
  "/",
  [
    check("name", "Please provide your name").not().isEmpty(),
    check("email", "Please provide valid email").isEmail(),
    check("password", "Please provide 6 character long password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    
    const { name, email, password } = req.body;
    try {
      //finding the user by email and checking if user is already registered, if yes. shows 'user already registered"
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already registered" });
      }
      //new user registration
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: { id: user.id },
      }; 
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
