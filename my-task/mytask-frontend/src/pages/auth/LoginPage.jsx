import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/authService";
import Cookies from "js-cookie";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { token, login } = useAuth();
   const navigate = useNavigate();

   if (token) {
      return <Navigate to="/dashboard/task" replace />;
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const userData = await loginUser({ email, password });
         Cookies.set("token", userData.token, { expires: 1 });
         login(userData.token);
         navigate("/dashboard");
      } catch (err) {
         setError("Invalid email or password");
      }
   };

   return (
      <div className="grid gap-5 px-10 py-5 text-gray-700">

         <div className="relative flex items-center justify-center">
            <hr className="w-full border-t-3 border-gray-400 absolute bottom-4 z-0" />
            <h2 className="relative z-10 text-center text-4xl mt-5 bg-white px-4 font-bold">
               LOGIN
            </h2>
         </div>
         <p className="text-center">
            Create you account. It's free and only takes a minute.
         </p>

         <form onSubmit={handleSubmit} className="grid gap-10">
            <div>
               <label htmlFor="Email">Email</label>
               <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border-1 border-gray-400 p-2 focus:outline-0 shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>

            <div>
               <label htmlFor="Password">Password</label>
               <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border-1 border-gray-400 p-2 focus:outline-0 shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>

                        <button
               type="submit"
               className="border-1 border-gray-400 mx-auto py-2 px-8 cursor-pointer"
            >
               Submit
            </button>
         </form>

         {error && <div>{error}</div>}
         <p className="text-center mb-5">
            Already have an account?
            <Link
               to="/register"
               className="ml-2 hover:text-blue-500 hover:underline transition-all mx-auto"
            >
               register
            </Link>{" "}
         </p>
      </div>
   );
};
export default LoginPage;
