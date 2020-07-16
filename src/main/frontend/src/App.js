import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Members from "./Pages/Members";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function App() {
  return (
    <div className="App">
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
                        <NavDropdown.Item href="#action/3.1">Login </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      <Members />
    </div>
  );
}

export default App;
