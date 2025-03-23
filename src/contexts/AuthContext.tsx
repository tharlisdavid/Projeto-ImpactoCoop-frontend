import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../services/authService";
import { useNavigate, useLocation } from "react-router-dom";

interface AuthContextType {
  user: any;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("🔄 Restaurando usuário do localStorage...");
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // 🔥 Agora garantimos que o usuário só será verificado depois do carregamento
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log("🟢 Tentando fazer login...");

    const response = await login(email, password);
    console.log("✅ Login bem-sucedido:", response);

    localStorage.setItem("token", response.token);
    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));

    // 🔄 Redirecionamento correto após login
    const from = location.state?.from?.pathname || "/users";
    console.log("➡️ Redirecionando para:", from);

    navigate(from, { replace: true });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
