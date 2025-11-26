import { Routes, Route } from "react-router-dom";

// Layout público
import PublicLayout from "./layouts/PublicLayout";

// Rotas públicas
import {
  Home,
  About,
  News,
  Contacts,
  Projects,
  Events,
  Team,
  Login,
} from "./pages/global";

// Rotas privadas
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts por role
import StudentLayout from "./roles/student/StudentLayout";
import TeacherLayout from "./roles/teacher/TeacherLayout";
import GuardianLayout from "./roles/guardian/GuardianLayout";
import AdminLayout from "./roles/admin/AdminLayout";

// Páginas internas por role
import { StudentDashboard, StudentProfile } from "./roles/student";

import { TeacherDashboard, TeacherProfile } from "./roles/teacher";

import { GuardianDashboard, GuardianProfile } from "./roles/guardian";

import { AdminDashboard, AdminRegisterUser, AdminUsers } from "./roles/admin";

import { NotFound } from "./pages/assistant";
import Unauthorized from "./pages/assistant/Unauthorized";

export default function AppRouter() {
  return (
    <Routes>
      {/* ROTAS PÚBLICAS */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="projects" element={<Projects />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* STUDENT */}
      <Route
        path="student"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      {/* TEACHER */}
      <Route
        path="teacher"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="profile" element={<TeacherProfile />} />
      </Route>

      {/* GUARDIAN */}
      <Route
        path="guardian"
        element={
          <ProtectedRoute allowedRoles={["guardian"]}>
            <GuardianLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<GuardianDashboard />} />
        <Route path="profile" element={<GuardianProfile />} />
      </Route>

      {/* ADMIN */}
      <Route
        path="admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="register-user" element={<AdminRegisterUser />} />
        <Route path="admin-user" element={<AdminUsers />} />
      </Route>

      {/* Unauthorized */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
