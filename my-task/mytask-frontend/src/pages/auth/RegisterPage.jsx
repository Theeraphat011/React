import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authService";

const RegisterPage = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordConfirm, setPasswordConfirm] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password !== passwordConfirm) {
         return setError("password not math");
      }

      try {
         const res = await registerUser({ name, email, password });
         console.log(res);
         navigate("/login");
      } catch (err) {
         setError("Failed to register");
      }
   };

   return (
      <div className="grid gap-5 px-10 py-5 text-gray-700">
         <div className="relative flex items-center justify-center">
            <hr className="w-full border-t-3 border-gray-400 absolute bottom-4 z-0" />
            <h2 className="relative z-10 text-center text-4xl mt-5 bg-white px-4 font-bold">
               REGISTER
            </h2>
         </div>
         <p className="text-center">
            Create you account. It's free and only takes a minute.
         </p>

         <form onSubmit={handleSubmit} className="grid gap-10">
            <div>
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full border-1 border-gray-400 p-2 focus:outline-0 mt-2 shadow-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
            </div>

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

            <div>
               <label htmlFor="confirm password">Confirm Password</label>
               <input
                  type="password"
                  placeholder="Enter confirm password"
                  className="w-full border-1 border-gray-400 p-2 focus:outline-0 shadow-sm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
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
               to="/login"
               className="ml-2 hover:text-blue-500 hover:underline transition-all mx-auto"
            >
               login
            </Link>{" "}
         </p>
      </div>
   );
};
export default RegisterPage;
