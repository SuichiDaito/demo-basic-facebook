function Logout({user, onLogout}) {

    const handleLogout = () => {
        localStorage.removeItem('user');
        onLogout(null);
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;