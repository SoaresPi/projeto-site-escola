import { Outlet } from "react-router-dom";
import SidebarStudent from "./SidebarStudent";

export default function StudentLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <SidebarStudent />

      {/* CONTEÚDO */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
