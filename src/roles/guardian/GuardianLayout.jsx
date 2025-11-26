import { Outlet } from "react-router-dom";
import SidebarGuardian from "./SidebarGuardian";

export default function GuardianLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <SidebarGuardian />

      {/* CONTEÚDO */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
