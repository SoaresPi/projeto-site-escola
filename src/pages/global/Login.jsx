import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../context/LoadingContext";

export default function Login() {
  const { setLoading } = useLoading();

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    try {
      //simula uma requisição
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Usuário autenticado");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4">Entrar</h2>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
