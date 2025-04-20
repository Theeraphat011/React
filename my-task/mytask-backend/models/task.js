const mongoose = require("mongoose");

const taskSchma = new mongoose.Schema(
   {
      title: { type: String, required: true },
      Description: { type: String },
      completed: { type: String, required: true },
      user: { type: mongoose.Schema.ObjectId, ref: "user", require: true },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchma);
