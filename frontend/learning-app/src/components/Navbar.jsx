import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MoonFill, Search } from "react-bootstrap-icons";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className="navbar1">
      <Container>
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar">
          <div className="search">
            <input type="text" placeholder="Search" />
            <span className="icon">
              <Search size={18} />
            </span>
          </div>
          <div className="right-items">
            <span className="moon">
              <MoonFill size={25} />
            </span>
            <span className="nav-buttons">
              <button className="login-button">
                <Link to="/login" className="navbar-link">
                  <span>Login</span>
                </Link>
              </button>
              <button className="sign-button">
                <Link to="/signup" className="navbar-link">
                  <span>Sign Up</span>
                </Link>
              </button>
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
