import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        console.log(user);
        return <Navigate to="/login" replace />;
    }
    return children;
}