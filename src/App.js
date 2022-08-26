
import Home from "./components/Home";
import Login from "./components/Login";
import appConfig from "./Credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {

  const auth = getAuth(appConfig);

  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null)
    }
  })
  return (
    <>
      {user ? <Home userEmail={user.email} /> : <Login />}
    </>
  );
}

export default App;
