import TaskHeader from "../../components/dashboard/Tasks/TaskHeader";

const ListPage = () => {
   return (
      <div className="w-full pt-6">
         <TaskHeader />
         <div className="px-6 mt-10">
            <table class="table-auto w-full">
               <thead>
                  <tr className="text-left text-zinc-600">
                     <th className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">Task name</th>
                     <th className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">Date</th>
                     <th className="border-t-1 border-b-1 py-2 border-zinc-300 pl-3">Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className="text-base">
                     <td className="border-t-1 border-b-1 py-4 border-zinc-300 pl-3"></td>
                     <td className="border-t-1 border-b-1 py-4 border-zinc-300 pl-3"></td>
                     <td className="border-t-1 border-b-1 py-4 border-zinc-300 pl-3"></td>
                  </tr>
                  <tr className="text-base">
                     <td className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                     <td className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">Malcolm Lockyer</td>
                     <td className="border-t-1 border-b-1 py-2 border-zinc-300 pl-3">1961</td>
                  </tr>
                  <tr>
                     <td className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">Witchy Woman</td>
                     <td className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">The Eagles</td>
                     <td className="border-t-1 border-b-1 py-2 border-zinc-300 pl-3">1972</td>
                  </tr>
                  <tr>
                     <td className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">Shining Star</td>
                     <td className="border-t-1 border-r-1 border-b-1 py-2 border-zinc-300 pl-3">Earth, Wind, and Fire</td>
                     <td className="border-t-1 border-b-1 py-2 border-zinc-300 pl-3">1975</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};
export default ListPage;
