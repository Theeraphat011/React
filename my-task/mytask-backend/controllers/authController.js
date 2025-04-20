const bcrypt = require("bcryptjs");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
   const { name, email, password } = req.body;
   console.log(name, email, password);
   try {
      const existUser = await User.findOne({ email });
      if (existUser) return res.status(409).json({ msg: "Email exist" });

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
         name,
         email,
         password: hashPassword,
      });

      res.status(201).json({
         msg: "Create user success",
         token: generateToken(newUser._id),
      });
   } catch (err) {
      res.status(400).json({ mag: "Server ERORR", err });
   }
};

exports.login = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ msg: "User not found" });

      console.log(user);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ msg: "Password error" });

      res.json({
         msg: "Login successful",
         token: generateToken(user._id),
         name: user.name,
      });
   } catch (err) {
      res.status(400).json({ msg: "Server ERORR", err });
   }
};
