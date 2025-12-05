import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

const navbarStyles = `
  . navbar {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 250, 0.95) 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    padding: 15px 0;
  }

  .navbar.sticky {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 240, 250, 0.98) 100%);
    box-shadow: 0 4px 20px rgba(155, 89, 182, 0.15);
    padding: 12px 0;
  }

  .navbar-brand {
    font-weight: 700;
    font-size: 1.8em;
    color: rgb(255, 255, 255) !  important;
    margin-right: 30px;
    transition: all 0.3s ease;
  }

  .navbar-brand:hover {
    color:rgb(38, 6, 166) ! important;
    transform: scale(1.05);
  }

  /* Toggle Button */
  .navbar-toggler {
    border: none;
    padding: 10px 12px;
    transition: all 0.3s ease;
  }

  .navbar-toggler:focus {
    box-shadow: none;
    outline: none;
  }

  .navbar-toggler span {
    display: block;
    width: 26px;
    height: 3px;
    background:rgb(255, 255, 255);
    margin: 5px 0;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .navbar-toggler[aria-expanded="true"] span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
  }

  .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  .navbar-toggler[aria-expanded="true"] span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  /* Navigation Links */
  .navbar-collapse {
    justify-content: flex-end;
  }

  .  ml-auto {
    margin-left: auto !  important;
    display: flex;
    gap: 10px;
  }

  . nav-item {
    position: relative;
  }

  .nav-link {
    color: #333 ! important;
    font-weight: 500;
    padding: 12px 18px !  important;
    margin: 0 5px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, rgb(255, 255, 255), #764ba2);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: rgb(255, 255, 255) ! important;
    background: rgba(155, 89, 182, 0.08);
    transform: translateY(-3px);
  }

  . nav-link:hover::before {
    width: 100%;
  }

  . nav-link svg {
    font-size: 1.3em;
    transition: all 0.3s ease;
  }

  .nav-link:hover svg {
    color:rgb(255, 255, 255);
    transform: scale(1.15) rotate(5deg);
  }

  /* Responsive - Mobile */
  @media (max-width: 768px) {
    .navbar {
      padding: 12px 0;
    }

    .navbar-brand {
      font-size: 1.5em;
      margin-right: 15px;
    }

    . navbar-collapse {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 240, 250, 0.98) 100%);
      border-radius: 15px;
      margin-top: 15px;
      padding: 20px 15px;
      box-shadow: 0 8px 25px rgba(155, 89, 182, 0.2);
      backdrop-filter: blur(10px);
    }

    .ml-auto {
      flex-direction: column;
      gap: 8px;
    }

    . nav-link {
      padding: 12px 15px !  important;
      margin: 8px 0;
      border-radius: 10px;
    }

    . nav-link::before {
      display: none;
    }

    .nav-link:active {
      background: rgba(0, 0, 0, 0.15);
      color:rgb(0, 0, 0) !  important;
    }
  }

  /* Animation d'apparition */
  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .navbar {
    animation: slideInDown 0.5s ease;
  }

  /* Icon animation au hover */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  .nav-link:hover svg {
    animation: pulse 0.6s ease;
  }
`;

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <style>{navbarStyles}</style>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <MdDeveloperMode style={{ marginRight: "8px" }} />
            Mbarek
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar. Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser /> About
                </Nav.Link>
              </Nav. Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument /> Resume
                </Nav.Link>
              </Nav.Item>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;