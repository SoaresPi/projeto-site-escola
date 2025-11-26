import { Outlet } from "react-router-dom";
import SidebarTeacher from "./SidebarTeacher";

export default function TeacherLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <SidebarTeacher />

      {/* CONTEÚDO */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
