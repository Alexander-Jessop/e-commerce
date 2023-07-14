import { Link } from "react-router-dom";

const NavBarLink = ({ path, name, className }) => {
  return (
    <Link to={path} className={className}>
      {name}
    </Link>
  );
};

export default NavBarLink;
