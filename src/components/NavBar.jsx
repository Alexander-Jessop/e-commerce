import { useLocation, useNavigate } from "react-router-dom";
import NavBarLink from "./UI/NavBarLink";
import CartIcon from "./cart/CartIcon";

const NavBar = ({ user, logout, toggleModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    { path: "/", name: "HOME" },
    { path: "/place-holder", name: "Place Holder" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      new Error(err.message);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-secondary p-4 text-primary-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ul className="flex space-x-4">
            {routes.map((route, index) => (
              <li key={index}>
                <NavBarLink
                  path={route.path}
                  name={route.name.toUpperCase()}
                  className={`${
                    location.pathname === route.path
                      ? "border-b-2 border-secondary text-selected"
                      : "border-b-2 border-transparent hover:border-accent"
                  } sm:mx-6`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          {!user && (
            <NavBarLink
              path="/user-auth"
              name="CREATE ACCOUNT"
              className={`${
                location.pathname === "/login"
                  ? "border-b-2 border-secondary text-selected"
                  : "border-b-2 border-transparent hover:border-accent"
              } sm:mx-6`}
            />
          )}
          {user && (
            <>
              <NavBarLink
                path="/profile"
                name="PROFILE"
                className={`${
                  location.pathname === "/profile"
                    ? "border-b-2 border-secondary text-selected"
                    : "border-b-2 border-transparent hover:border-accent"
                }`}
              />
              <NavBarLink onClick={handleLogout} name="LOGOUT" />
            </>
          )}
          <div
            className="rounded-full p-2 cursor-pointer"
            onClick={toggleModal}
          >
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
