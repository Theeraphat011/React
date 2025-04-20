const Task = require("../models/task");

exports.getTask = async (req, res) => {
   try {
      const tasks = await Task.find({ user: req.user });
      res.status(200).json(tasks);
   } catch (err) {
      res.status(500).json({ msg: "Can't loading your task" });
   }
};

exports.createTask = async (req, res) => {
   const { title,completed } = req.body;
   console.log(title,completed)
   try {
      const newTask = await Task.create({ title,completed, user: req.user });
      console.log(req.user);
      res.status(200).json(newTask);
   } catch (err) {
      res.status(500).json({ msg: "Can't create your task" });
   }
};

exports.updateTask = async (req, res) => {
   const { id } = req.params;
   const { title, completed } = req.body;
   console.log(id, title, completed);
   try {
      const task = await Task.findOneAndUpdate(
         { _id: id, user: req.user },
         { title, completed },
         { new: true }
      );

      if (!task) return res.status(404).json({ msg: "Task not found" });

      res.status(200).json(task);
   } catch (err) {
      res.status(500).json({ msg: "Can't update your task" });
   }
};

exports.deleteTask = async (req, res) => {
   const { id } = req.params;

   try {
      const task = await Task.findOneAndDelete({ _id: id, user: req.user });
      if (!task) return res.status(404).json({ msg: "Task not found" });
      res.status(200).json({ msg: "remove success" });
   } catch (err) {
      res.status(500).json({ msg: "Can't remove task" });
   }
};
