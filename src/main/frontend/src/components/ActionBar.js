import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import {bindActionCreators} from "redux";
import {handUpDown, logout} from "../actions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import {DropdownButton, Dropdown} from "react-bootstrap";


class ActionBar extends Component {

    Logout=()=>{
        this.props.logout();
    };

    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Action" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => this.props.handUpDown(this.props.user)}>Hands
                                    up</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => this.props.handUpDown(this.props.user)}>Hand
                                    down</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/*<Nav className="ml-auto">
                            <NavDropdown title={this.props.user.name} id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Button  type="submit">
                                        Logout
                                    </Button>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>*/}

                        <DropdownButton
                            alignRight
                            title={this.props.user.name}
                            id="dropdown-menu-align-right"
                        >
                            <Dropdown.Item onClick={this.Logout}>Logout</Dropdown.Item>

                        </DropdownButton>
                    </Navbar.Collapse>
                </Navbar>
            </Router>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({handUpDown: handUpDown, logout: logout}, dispatch)
}



export default connect(mapStateToProps, matchDispatchToProps)(ActionBar);

