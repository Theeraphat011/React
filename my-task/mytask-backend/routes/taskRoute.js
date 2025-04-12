const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
   createTask,
   getTask,
   updateTask,
   deleteTask,
} = require("../controllers/taskController");

router.get("/mytask", authMiddleware, getTask);
router.post("/mytask", authMiddleware, createTask);
router.put("/mytask/:id", authMiddleware, updateTask);
router.delete("/mytask/:id", authMiddleware, deleteTask);

module.exports = router;
