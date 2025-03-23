import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService"; // 🟢 Certifique-se de ter esse serviço
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers(); // 🔥 Obtém a lista de usuários do backend
      setUsers(response);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <Link to="/users/new">Criar Usuário</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fullName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
