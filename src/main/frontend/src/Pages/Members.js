
import "./MemdersStyle.css";

import React, {useState} from 'react';
import {Component} from "react";
import {Form, FormControl, Navbar} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import 'bootstrap/dist/css/bootstrap.min.css';

import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


export default class Members extends Component {
    render() {
        return (
            <body>



                <ul className="list-group" >
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>

            </body>
        );
    }
}


/*const Example = () => {
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default Example;*/
