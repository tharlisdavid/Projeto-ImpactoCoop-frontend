import api from "./api";

export const getSocialActions = async () => {
  try {
    const response = await axios.get("/social-actions");
    return response.data || []; // ✅ Garante que um array seja retornado
  } catch (error) {
    console.error("Erro ao buscar ações sociais", error);
    return []; // 🔥 Retorna um array vazio para evitar erro de `undefined`
  }
};

export const createSocialAction = async (
  title: string,
  description: string
) => {
  return api.post("/social-actions", { title, description });
};

export const updateSocialAction = async (
  id: string,
  title: string,
  description: string
) => {
  return api.put(`/social-actions/${id}`, { title, description });
};

export const deleteSocialAction = async (id: string) => {
  return api.delete(`/social-actions/${id}`);
};
