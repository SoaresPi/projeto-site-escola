import Sidebar from "../components/student/Sidebar";

export default function StudentLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
