import Home from "../pages/Home";
import Login from "../component/Login";
import { Route, Routes, Navigate } from "react-router-dom";


export default function AppRoutes () {
    return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    );
 }