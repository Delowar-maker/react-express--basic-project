import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import ValidationHelper from "../utility/ValidationHelper";
const AppNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>
            <NavLink className={"nav-link"} to="/cart-list">
              Cart List
            </NavLink>
            <NavLink className={"nav-link"} to="/login">
              Login
            </NavLink>
          </Nav>
          {ValidationHelper.isLogin() ? (
            <button className="btn btn-danger">Logout</button>
          ) : (
            <button className="btn btn-success">Login</button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;