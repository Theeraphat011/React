import { CiUser } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

const TaskHeader = () => {
   return (
      <div className="px-6 border-b-1 border-zinc-300">
         <div className="flex items-center gap-3">
            <CiUser className="bg-zinc-700 text-white text-5xl rounded-full p-2 mb-3" />
            <div className="text-zinc-800">
               <p className="flex items-center gap-2 font-bold text-2xl mb-2">
                  My Tasks <IoIosArrowDropdown/>
               </p>
               <ul className="flex gap-6 text-lg font-medium">
                  <li className="border-b-2">List</li>
                  <li>Board</li>
                  <li>Calendar</li>
                  <li>File</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
export default TaskHeader;
