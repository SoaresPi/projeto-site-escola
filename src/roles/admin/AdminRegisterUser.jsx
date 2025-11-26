import { useState } from "react";

export default function AdminRegisterUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar usuário.");
      }

      setMessage({ type: "success", text: "Usuário cadastrado com sucesso!" });

      // limpar formulário
      setForm({
        name: "",
        email: "",
        password: "",
        role: "student",
      });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }

    setLoading(false);
  }

  return (
    <div className="p-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Cadastrar novo usuário</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Nome */}
        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
          />
        </div>

        {/* Senha */}
        <div>
          <label className="block mb-1 font-medium">Senha</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1 font-medium">Tipo de Usuário</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
          >
            <option value="student">Aluno</option>
            <option value="teacher">Professor</option>
            <option value="guardian">Guardião</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 p-3 rounded-lg text-white transition"
        >
          {loading ? "Cadastrando..." : "Cadastrar Usuário"}
        </button>

        {/* Mensagens */}
        {message.text && (
          <p
            className={`p-2 rounded text-sm ${
              message.type === "success"
                ? "bg-green-700 text-green-100"
                : "bg-red-700 text-red-100"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}
