import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/login");
    }

    return (
        <div>
            <h1>Welcome to my page</h1>
            <button onClick={onClick}>Login page</button>
        </div>
    );
}