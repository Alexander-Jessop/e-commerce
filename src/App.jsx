import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { FBAuthContext } from "./firebase/FBAuthProvider";
import AccessPage from "./pages/AccessPage";

function App() {
  const { user } = useContext(FBAuthContext);

  return (
    <Routes>
      <Route path="/" element={<AccessPage />} />
    </Routes>
  );
}

export default App;
