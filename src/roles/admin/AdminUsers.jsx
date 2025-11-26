import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal
  const [editModal, setEditModal] = useState(false);
  const [selected, setSelected] = useState(null);

  // Carregar usuários
  async function loadUsers() {
    try {
      const response = await fetch("http://localhost:3000/auth/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (data.success) setUsers(data.users);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  // Abrir modal de edição
  function openEdit(user) {
    setSelected({
      ...user,
      permissions: user.permissions ? JSON.parse(user.permissions) : {},
    });
    setEditModal(true);
  }

  // Atualizar usuário
  async function handleSave() {
    try {
      const response = await fetch(
        `http://localhost:3000/auth/users/${selected.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(selected),
        }
      );

      const data = await response.json();

      if (data.success) {
        setEditModal(false);
        loadUsers();
      }
    } catch (err) {
      console.error("Erro ao atualizar:", err);
    }
  }

  if (loading)
    return <p className="p-6 text-center text-neutral-300">Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gerenciar Usuários</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-neutral-900 rounded-lg">
          <thead>
            <tr className="bg-neutral-800 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Nome</th>
              <th className="p-3">Email</th>
              <th className="p-3">Função</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-neutral-700">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3 capitalize">{u.role}</td>
                <td className="p-3">
                  <button
                    onClick={() => openEdit(u)}
                    className="px-3 py-1 bg-orange-600 rounded hover:bg-orange-700 transition"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de edição */}
      {editModal && selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Editar Usuário</h2>

            {/* Nome */}
            <label className="block mb-1">Nome</label>
            <input
              type="text"
              value={selected.name}
              onChange={(e) =>
                setSelected({ ...selected, name: e.target.value })
              }
              className="w-full p-2 rounded bg-neutral-800 mb-3"
            />

            {/* Email */}
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={selected.email}
              onChange={(e) =>
                setSelected({ ...selected, email: e.target.value })
              }
              className="w-full p-2 rounded bg-neutral-800 mb-3"
            />

            {/* Role */}
            <label className="block mb-1">Função</label>
            <select
              value={selected.role}
              onChange={(e) =>
                setSelected({ ...selected, role: e.target.value })
              }
              className="w-full p-2 rounded bg-neutral-800 mb-3"
            >
              <option value="student">Aluno</option>
              <option value="teacher">Professor</option>
              <option value="guardian">Guardião</option>
              <option value="admin">Administrador</option>
            </select>

            {/* Permissões */}
            <label className="block font-medium mt-4 mb-2">
              Permissões Extras
            </label>

            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.permissions?.canCreateUsers || false}
                  onChange={(e) =>
                    setSelected({
                      ...selected,
                      permissions: {
                        ...selected.permissions,
                        canCreateUsers: e.target.checked,
                      },
                    })
                  }
                />
                Permitir criar usuários
              </label>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditModal(false)}
                className="px-4 py-2 bg-neutral-700 rounded hover:bg-neutral-600"
              >
                Cancelar
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
