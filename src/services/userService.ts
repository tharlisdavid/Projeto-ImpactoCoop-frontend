import axios from "axios";

const API_URL = "http://localhost:5000/users"; // 🔥 Certifique-se que a API está rodando!

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};
