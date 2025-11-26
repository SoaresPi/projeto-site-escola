import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // evita piscar a tela e protege rotas antes da validação

  // 🔄 1. Executa quando o app inicia → tenta restaurar sessão
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    // adiciona token ao header automaticamente
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // tenta buscar o usuário válido
    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        // token inválido → remover
        localStorage.removeItem("token");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 🔐 LOGIN
  const login = async (email, senha) => {
    try {
      const response = await api.post("/auth/login", { email, senha });

      if (response.data.success) {
        const token = response.data.token;

        setUser(response.data.user);
        localStorage.setItem("token", token);

        // coloca token nas próximas requisições
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        return {
          success: true,
          user: response.data.user,
        };
      }

      return { success: false };
    } catch (error) {
      console.error("Erro no login:", error);
      return { success: false };
    }
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
