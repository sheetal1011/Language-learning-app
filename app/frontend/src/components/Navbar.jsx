import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { MoonFill, Search } from "react-bootstrap-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

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
            <input type="text" placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown} />
            <span className="icon">
              <Search size={18} />
            </span>
          </div>

          <Link to="/courses" className="courses-link">
            <button className="courses-button">Courses</button>
          </Link>
          <Link to="/select-language" className="quiz-link">
            <button className="quiz-button">Quiz</button>
          </Link>

          <div className="right-items">
          <div className="moon">
            <MoonFill size={25} />
          </div>
            {user ? (
              <Dropdown align="end" className="profile-section">
                <Dropdown.Toggle variant="transparent" className="username" id="user-dropdown">
                  <i className="bi bi-person-circle" style={{ marginRight: "6px" }}></i>
                  {user.name}
                </Dropdown.Toggle>
              
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item
                    className="logout-button"
                    onClick={() => {
                      localStorage.removeItem("user");
                      localStorage.removeItem("token");
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            ) : (
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
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
