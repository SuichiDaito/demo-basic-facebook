import { useLogout } from "../hooks/useLogout";

function Logout() {
 const { handleLogout } = useLogout();
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;