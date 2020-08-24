import Navbar from "react-bootstrap/Navbar";
import React, {Component} from "react";

import {bindActionCreators} from "redux";
import {handUpDown, logout, setTypeMessage} from "../actions";
import {connect} from "react-redux";
import {DropdownButton, Dropdown, NavDropdown, Nav} from "react-bootstrap";


class ActionBar extends Component {

    Logout = () => {
        this.props.setTypeMessage("LEAVE");
        this.props.client.sendMessage('/app/user-all', JSON.stringify(this.props.user));
        this.props.logout();
    };

    HandUpDown = () => {
        this.props.setTypeMessage("HAND_UP_DOWN");
        console.log(this.props.user);
        this.props.client.sendMessage('/app/user-all', JSON.stringify(this.props.user));
        this.props.handUpDown(this.props.user.handUp);
    };

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Collapse id="basic-navbar-nav">

                        {/* <DropdownButton className="mr-auto"
                            alignLeft
                            title="Action"
                            id="dropdown-menu-align-left"
                        >
                            <Dropdown.Item onClick={this.HandUpDown}>
                                {
                                    (this.props.user.handUp===true)?
                                        "HandDown" : "HandUp"
                                }
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            alignRight
                            title={this.props.user.name}
                            id="dropdown-menu-align-right"
                        >
                            <Dropdown.Item onClick={this.Logout}>Logout</Dropdown.Item>
                        </DropdownButton>*/}


                        <Nav className="mr-auto">
                            <NavDropdown

                                title="Action"
                                id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={this.HandUpDown}>
                                    {
                                        (this.props.user.handUp === true) ?
                                            "HandDown" : "HandUp"
                                    }
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className="ml-auto">
                            <NavDropdown
                                alignRight
                                title={this.props.user.name}
                                id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={this.Logout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        handUpDown: handUpDown,
        logout: logout,
        setTypeMessage: setTypeMessage
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(ActionBar);

