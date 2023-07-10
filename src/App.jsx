import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { FBAuthContext } from "./firebase/FBAuthProvider";

function App() {
  const { user } = useContext(FBAuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<h1 className="text-3xl font-bold underline">Home</h1>}
      />
    </Routes>
  );
}

export default App;
