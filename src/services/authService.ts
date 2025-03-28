import api from "./api";

interface LoginResponse {
  token: string;
}

export const login = async (email: string, password: string) => {
  try {
    console.log("Enviando login com:", { email, password });
    const response = await api.post("/auth/login", { email, password });
    console.log("Resposta do backend:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Erro no login:", error.response?.data || error.message);
    throw error;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  return api.post("/auth/register", { name, email, password });
};
