import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          bOOks
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/createbook">Create Book</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
