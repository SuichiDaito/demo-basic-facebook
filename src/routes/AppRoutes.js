import Home from "../pages/Home";
import Login from "../component/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/Dashboard";
import { ProtectedRoute } from "../component/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard></DashBoard>} ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/login"></Navigate>} ></Route>
    </Routes>
  );
}