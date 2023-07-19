import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { FBAuthContext } from "./firebase/FBAuthProvider";
import NavBar from "./components/NavBar";
import AccessPage from "./pages/AccessPage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./components/cart/Cart";

function App() {
  const { user, logout } = useContext(FBAuthContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <NavBar user={user} logout={logout} toggleModal={toggleModal} />
      {showModal && <Cart toggleModal={toggleModal} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/user-auth" element={<AccessPage />} />
        <Route path="/user-profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
