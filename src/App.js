import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./component/Login";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  return (
    <div>
      <h1>Welcome to the App</h1>
      {!user ? <Login onLogin={setUser} /> : <Home user={user} onLogout={() => setUser(null)} />}
    </div>
  );
}

export default App;
