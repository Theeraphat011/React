import { useEffect, useState } from "react";
import { getTask } from "../../services/taskService";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";


const TaskPage = () => {
   const { token } = useAuth();
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchTasks = async () => {
         try {
            const data = await getTask(token);
            setTasks(data);
         } catch (err) {
            console.error("Error loading data:", err);
         } finally {
            setLoading(false);
         }
      };

      if (token) fetchTasks();
   }, [token]);

   if (loading) return <div>Loading</div>;

   console.log(tasks);
   return (
      <div>
         <h1>Tasks</h1>
         {tasks.length === 0 ? (
            <div>Task not found</div>
         ) : (
            <ul>
               {tasks.map((task) => (
                  <li key={task._id}>
                     {task.title} - {task.complete ? "true" : "false"}
                  </li>
               ))}
            </ul>
         )}

         <Link to={'/dashboard'}>Go to dashboard</Link>
      </div>
   );
};
export default TaskPage;
