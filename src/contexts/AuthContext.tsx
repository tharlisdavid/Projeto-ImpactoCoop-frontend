import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const login = async (email: string, password: string) => {
    console.log("Tentando logar com", email);
    // Adicione a lógica de autenticação aqui
  };

  const logout = () => {
    console.log("Deslogando...");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🚀 Correção: Garanta que `useAuth` esteja sendo exportado corretamente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
