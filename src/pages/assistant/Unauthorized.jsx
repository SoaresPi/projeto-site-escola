import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const backToDashboard = () => {
    if (!user) return navigate("/login");

    const routes = {
      admin: "/admin",
      teacher: "/teacher",
      student: "/student",
      guardian: "/guardian",
    };

    navigate(routes[user.role] || "/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Acesso negado</h1>

      <p className="text-lg text-gray-600 mb-6">
        Você não tem permissão para acessar esta página.
      </p>

      <button
        onClick={backToDashboard}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Voltar
      </button>
    </div>
  );
}
