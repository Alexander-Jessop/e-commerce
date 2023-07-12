import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { FBAuthContext } from "./firebase/FBAuthProvider";
import SignInForm from "./components/form/SignInForm";
import SignUpForm from "./components/form/SignUpForm";

function App() {
  const { user } = useContext(FBAuthContext);

  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
