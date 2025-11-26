import SidebarAdmin from "./SidebarAdmin";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <SidebarAdmin />

      <main className="flex-1 p-6 bg-neutral-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
