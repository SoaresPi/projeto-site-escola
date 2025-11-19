import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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

import { StudentPainel } from "./pages/student";

import { TeacherPainel } from "./pages/teacher";

import { GuardianPainel } from "./pages/guardian";

import { NotFound } from "./pages/assistant";
import { LoadingProvider } from "./context/LoadingContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "news", element: <News /> },
      { path: "contacts", element: <Contacts /> },
      { path: "projects", element: <Projects /> },
      { path: "events", element: <Events /> },
      { path: "team", element: <Team /> },
      { path: "login", element: <Login /> },
      {
        path: "student",
        element: (
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentPainel />
          </ProtectedRoute>
        ),
      },
      {
        path: "teacher",
        element: (
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherPainel />
          </ProtectedRoute>
        ),
      },
      {
        path: "guardian",
        element: (
          <ProtectedRoute allowedRoles={["guardian"]}>
            <GuardianPainel />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </AuthProvider>
  );
}
