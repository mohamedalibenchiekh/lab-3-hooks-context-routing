import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import UserDetailPage from "./pages/UserDetailPage";
import FakeLoginPage from "./pages/FakeLoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import ItemDetailPage from "./pages/ItemDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="page">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
            <Route path="/login" element={<FakeLoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/dashboard/items/:id" element={<ProtectedRoute><ItemDetailPage /></ProtectedRoute>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}