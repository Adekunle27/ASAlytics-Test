import header_logo from "../images/header-logo.png";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="container nav__container">
      <div className="left">
        <img src={header_logo} alt="" />
      </div>
      <div className="right">
        <a href="/">ANALYZE ASAs</a>
      </div>
    </nav>
  );
};

export default Nav;
