import { useState } from "react";
import { createTask } from "../../services/taskService";
import { useAuth } from "../../context/AuthContext";
import TaskHeader from "../../components/dashboard/Tasks/TaskHeader";

const CreateTaskPage = () => {
   const [title, setTitle] = useState("");
   const [status, setStatus] = useState("pending");
   const [successMessage, setSuccessMessage] = useState("");
   const [error, setError] = useState("");
   const { token } = useAuth();

   const taskData = {
      title: title,
      completed: status,
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!title.trim()) {
         setError("Please enter task name");
         return;
      }

      try {
         await createTask(token, taskData);
         setTitle("");
         setSuccessMessage("Create task sucess");
      } catch (err) {
         console.error(err);
         setError("Can't create task");
      }
   };

   return (
      <div className="bg-gray-100 w-full pt-6">
         <TaskHeader/>

         {error && <p className="text-red-500">{error}</p>}

         {successMessage && <p className="text-green-500">{successMessage}</p>}



         <form onSubmit={handleSubmit} className="space-y-4 mt-10 px-6">
            <div>
               <label className="block font-medium mb-1">Task Title</label>
               <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your task"
               />
            </div>

            <div>
               <label className="block font-medium mb-1">Status</label>
               <select
                  className="w-full p-2 border rounded"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
               >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
               </select>
            </div>

            <button
               type="submit"
               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
               Save Task
            </button>
         </form>
      </div>
   );
};

export default CreateTaskPage;
