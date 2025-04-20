import axios from "axios";

const API_URL = "http://localhost:5000/api/mytask";

export const getTask = async (token) => {
   try {
      const res = await axios.get(API_URL, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return res.data;
   } catch (err) {
      console.error(err);
   }
};

export const createTask = async (token, taskData) => {
   console.log(taskData);
   try {
      const res = await axios.post(API_URL, taskData, {
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
         },
      });
      return res.data;
   } catch (err) {
      console.error(err);
   }
};
