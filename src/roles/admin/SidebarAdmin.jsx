import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function SidebarAdmin() {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();

  return (
    <aside
      className={`h-screen bg-neutral-900 text-white p-4 flex flex-col transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header da sidebar */}
      <div className="flex items-center justify-between mb-8">
        {!collapsed && <h2 className="text-xl font-bold">Admin</h2>}

        <button
          className="p-2 hover:bg-neutral-700 rounded-lg"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 text-sm">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg 
            ${isActive ? "bg-orange-600" : "hover:bg-neutral-700"}`
          }
        >
          <LayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/admin/register-user"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg 
            ${isActive ? "bg-orange-600" : "hover:bg-neutral-700"}`
          }
        >
          <UserPlus size={20} />
          {!collapsed && <span>Cadastrar Usuário</span>}
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg 
            ${isActive ? "bg-neutral-800" : "hover:bg-neutral-700"}`
          }
        >
          <Settings size={20} />
          {!collapsed && <span>Configurações</span>}
        </NavLink>
      </nav>

      {/* Logout */}
      <button
        onClick={logout}
        className="mt-auto flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-700"
      >
        <LogOut size={20} />
        {!collapsed && <span>Sair</span>}
      </button>
    </aside>
  );
}
