const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MONGODB connect success!");
   } catch (err) {
      console.error("MONGODB connection failed:", err);
      process.exit(1);
   }
};

module.exports = connectDB;
