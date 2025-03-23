import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userService"; // 🟢 Certifique-se de ter esse serviço

const UserCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(formData); // 🔥 Envia os dados para o backend
      navigate("/users"); // Redireciona para a lista de usuários
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Nome Completo"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Criar Usuário</button>
    </form>
  );
};

export default UserCreate;
