import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState("");
   const [token, setToken] = useState(null);

   useEffect(() => {
      const token = Cookies.get("token");
      const user = Cookies.get("username");
      if (token) {
         setToken(token);
      }

      if (user) {
         setUser(user);
      }
   }, []);

   const login = (token, user) => {
      setToken(token);
      setToken(user);
   };

   const logout = () => {
      Cookies.remove("token");
      Cookies.remove("username");
      setToken(null);
      setUser(null);
   };

   return (
      <AuthContext.Provider value={{ user, token, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   return useContext(AuthContext);
};
