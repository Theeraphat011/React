import { useEffect, useState } from "react";
import { getTask } from "../../services/taskService";
import { useAuth } from "../../context/AuthContext";

const TaskPage = () => {
   const { token } = useAuth();
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchTasks = async () => {
         try {
            const data = await getTask(token);
            setTasks(data);
            console.log(data)
         } catch (err) {
            console.error("Error loading data:", err);
         } finally {
            setLoading(false);
         }
      };

      if (token) fetchTasks();
   }, [token]);

   if (loading) return <div>Loading</div>;

   return (
      <div className="w-full">
         <h1>Tasks</h1>
         {tasks.length === 0 ? (
            <div>Task not found</div>
         ) : (
            <ul>
               {tasks.map((task) => (
                  <li key={task._id}>
                     {task.title} - {task.completed}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};
export default TaskPage;
