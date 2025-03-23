import { BrowserRouter as Router, Route, Navigate, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuth } from "./contexts/AuthContext";

import SocialActionList from "./pages/SocialAction/SocialActionList";
import SocialActionCreate from "./pages/SocialAction/SocialActionCreate";
import SocialActionEdit from "./pages/SocialAction/SocialActionEdit";

import UserList from "./pages/Users/UserList";
import UserCreate from "./pages/Users/UserCreate";
import UserEdit from "./pages/Users/UserEdit";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <p>Carregando...</p>; // 🔄 Evita redirecionamento enquanto carrega
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  const { user } = useAuth(); // 🔥 Mover o useAuth para dentro do componente para evitar erro

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

        {/* Rotas para Usuários */}
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
        <Route path="/users/new" element={<PrivateRoute><UserCreate /></PrivateRoute>} />
        <Route path="/users/:id" element={<PrivateRoute><UserEdit /></PrivateRoute>} />

        {/* Rotas para Ações Sociais */}
        <Route path="/social-actions" element={<PrivateRoute><SocialActionList /></PrivateRoute>} />
        <Route path="/social-actions/new" element={<PrivateRoute><SocialActionCreate /></PrivateRoute>} />
        <Route path="/social-actions/:id" element={<PrivateRoute><SocialActionEdit /></PrivateRoute>} />

        {/* 🟢 Redirecionamento inicial corrigido */}
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} replace />} />
        <Route path="*" element={<Navigate to={user ? "/users" : "/login"} />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
