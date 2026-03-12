import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/user/UserDashboard";
import { UserAuth } from "./auth/UserAuth.tsx";
import { AdminAuth } from "./auth/AdminAuth.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import FacialRecognition from "./pages/user/FacialRecognition.tsx";
import DashboardLayout from "./components/dashboard/admin/DashboardLayout.tsx";
import StaffMgt from "./pages/admin/StaffMgt.tsx";
import Holiday from "./pages/admin/Holiday.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/face-recognition" element={<FacialRecognition />} />
        <Route path="*" element={<NotFound />} />
        {/* user routes */}
        <Route
          path="/usr/d"
          element={
            <UserAuth>
              <UserDashboard />
            </UserAuth>
          }
        />
        {/* admin routes */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/adm/d"
            element={
              <AdminAuth>
                <AdminDashboard />
              </AdminAuth>
            }
          />
          <Route
            path="/adm/d/mgt"
            element={
              <AdminAuth>
                <StaffMgt />
              </AdminAuth>
            }
          />
          <Route
            path="/adm/d/holidays"
            element={
              <AdminAuth>
                <Holiday />
              </AdminAuth>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
