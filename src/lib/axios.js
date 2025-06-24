import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const ApiInstance = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export const handleRegister = async (data) => {
  try {
    const res = await ApiInstance.post("/auth/register", data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
