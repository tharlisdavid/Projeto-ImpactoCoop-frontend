import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default api;

// Simulação de busca de CEP no Brasil
export const findBrazilianZipCode = async (cep: string) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    return null;
  }
};
