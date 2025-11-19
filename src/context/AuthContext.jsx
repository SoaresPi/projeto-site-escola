import { createContext, useContext, useState } from "react";

//Cria o contexto
const AuthContext = createContext();

//Hook de acesso rápido
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // Ex.: user = {name: "João", role: "Aluno"} ou {role: "Professor"}

  // Simula Login
  const login = (userData) => setUser(userData);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
