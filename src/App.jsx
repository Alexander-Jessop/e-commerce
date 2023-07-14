import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { FBAuthContext } from "./firebase/FBAuthProvider";
import NavBar from "./components/NavBar";
import AccessPage from "./pages/AccessPage";

function App() {
  const { user, logout } = useContext(FBAuthContext);

  return (
    <>
      <NavBar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<AccessPage />} />
      </Routes>
    </>
  );
}

export default App;
