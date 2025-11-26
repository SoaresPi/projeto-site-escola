import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");

  // 🔥 Mapeamento de rotas baseado no seu router.jsx
  const getDashboardRouteByRole = (role) => {
    const routes = {
      admin: "/admin",
      teacher: "/teacher",
      student: "/student",
      guardian: "/guardian",
    };

    return routes[role] || "/";
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // 🔥 EVITA RELOAD DA PÁGINA

    const res = await login(email, password);

    if (!res.success) {
      setErro("Credenciais inválidas");
      return;
    }

    const dashboard = getDashboardRouteByRole(res.user.role);
    navigate(dashboard);
  };

  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-orange-600 mb-2 text-center">
          Bem-vindo!
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Acesse sua conta para continuar
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="text-gray-700 font-medium text-sm">E-mail</label>
            <input
              type="email"
              placeholder="seuemail@escola.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
              outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium text-sm">Senha</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
                focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
                outline-none transition pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg 
            font-medium flex items-center justify-center gap-2 
            transition shadow-md hover:shadow-lg"
          >
            <LogIn size={20} />
            Entrar
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Esqueceu a senha?{" "}
          <span className="text-orange-600 hover:underline cursor-pointer">
            Recuperar acesso
          </span>
        </p>
      </motion.div>
    </main>
  );
}
