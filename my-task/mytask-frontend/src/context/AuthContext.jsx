import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(null);

   useEffect(() => {
      const token = Cookies.get("token");
      if (token) {
         setToken(token);
      }
   }, []);

   const login = (token) => {
      setToken(token);
   };

   const logout = () => {
      Cookies.remove("token");
      setToken(null);
   };

   return (
      <AuthContext.Provider value={{ token, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   return useContext(AuthContext);
};
