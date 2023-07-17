import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { FBAuthContext } from "./firebase/FBAuthProvider";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import AccessPage from "./pages/AccessPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const { user, logout } = useContext(FBAuthContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <NavBar user={user} logout={logout} toggleModal={toggleModal} />
      {showModal && <Modal toggleModal={toggleModal}>Modal</Modal>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-auth" element={<AccessPage />} />
      </Routes>
    </>
  );
}

export default App;
