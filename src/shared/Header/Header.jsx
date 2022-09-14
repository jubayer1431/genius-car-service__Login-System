import React from "react";
import {signOut} from 'firebase/auth'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";
import {firebaseAuth} from "../../firebase.init";
import {useAuthState} from "react-firebase-hooks/auth";

const Header = () => {

  const [user] = useAuthState(firebaseAuth);

  const handleSignOut = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky={"top"}
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img height={30} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/#services"}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to={"/#experts"}>
              Experts
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>

            {user ? (
                    <Nav.Link onClick={handleSignOut} as={Link} to={"/"} >
                      Sign-Out
                    </Nav.Link>
            ) : (
                <Nav.Link as={Link} to={"/sign-in"}>
                  Sign-In
                </Nav.Link>
            )}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
