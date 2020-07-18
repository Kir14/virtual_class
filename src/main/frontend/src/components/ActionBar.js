import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Members from "./Members";
import {
    BrowserRouter as Router,
        Route,
        Link,
        Switch,
        Redirect,
        useLocation
} from "react-router-dom";
import Login from "./Login";


export default function ActionBar() {
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Action" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Hands up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hand down</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to={"login"}>Login</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <Link to={"members"}>Mems</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    )

}