import axios from "axios";
import { handleError } from "./Constant";

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

export const handleAuthVerify = async () => {
  try {
    const res = await ApiInstance.get("/auth/verify");
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const handleAuthLogin = async (data) => {
  try {
    const res = await ApiInstance.post("/auth/login", data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const handleAuthLogout = async () => {
  try {
    const res = await ApiInstance.get("/auth/logout");
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
