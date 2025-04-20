import { useAuth } from "../../context/AuthContext";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiExportLight } from "react-icons/pi";

const Header = () => {
   const { user } = useAuth();

   return (
      <div className="flex justify-between bg-zinc-800 py-3 px-6 text-white">
         <div className="flex items-center gap-6 ">
            <RxHamburgerMenu className="text-2xl" />
            <PiExportLight  className="text-2xl" />
         </div>

         <div className="relative flex items-center w-1/3">
            <CiSearch className="absolute left-2 text-2xl" />
            <input
               type="text"
               className="bg-zinc-600 w-full rounded-3xl px-3 py-1 pl-10"
               placeholder="Search"
            />
         </div>

         <div className="flex items-center gap-2 bg-zinc-100 rounded-2xl px-4 text-zinc-800">
            <FaUser /> {user}
         </div>
      </div>
   );
};
export default Header;
