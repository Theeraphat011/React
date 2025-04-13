import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = async (formData) => {
   try {
      const res = await axios.post(`${API_URL}/register`, formData);
      return await res.data;
   } catch (err) {
      console.error(err);
   }
};

export const loginUser = async (credentials) => {
    try {
        const res = await axios.post(`${API_URL}/login`, credentials);
        return await res.data;
     } catch (err) {
        console.error(err);
     }
};
