import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import { AdminAuth } from "./auth/AdminAuth.tsx";
import Login from "./pages/Login.tsx";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";
import Overview from "./pages/dashboard/Overview.tsx";
import Employees from "./pages/dashboard/Employees.tsx";
import GradeLevels from "./pages/dashboard/GradeLevels.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/* protected routes */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/d"
            element={
              <AdminAuth>
                <Overview />
              </AdminAuth>
            }
          />
          <Route
            path="/d/employees"
            element={
              <AdminAuth>
                <Employees />
              </AdminAuth>
            }
          />
          <Route
            path="/d/grade-levels"
            element={
              <AdminAuth>
                <GradeLevels />
              </AdminAuth>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
