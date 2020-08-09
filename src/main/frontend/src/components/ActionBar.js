import Navbar from "react-bootstrap/Navbar";
import React, {Component} from "react";

import {bindActionCreators} from "redux";
import {handUpDown, logout, setTypeMessage} from "../actions";
import {connect} from "react-redux";
import {DropdownButton, Dropdown} from "react-bootstrap";
import SockJsClient from "react-stomp";


class ActionBar extends Component {

    Logout=()=>{
        this.props.setTypeMessage("LEAVE");
        this.props.client.sendMessage('/app/user-all', JSON.stringify(this.props.user));
        this.props.logout();
        this.props.client.disconnect();
    };

    HandUpDown=()=>{
        this.props.setTypeMessage("HAND_UP_DOWN");
        this.props.client.sendMessage('/app/user-all', JSON.stringify(this.props.user));
        this.props.handUpDown(this.props.user.handUp);
    };

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Collapse id="basic-navbar-nav">

                        <DropdownButton className="mr-auto"
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

                       {/* <Nav className="mr-auto">
                            <NavDropdown title="Action" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => this.props.handUpDown(this.props.user)}>Hands
                                    up</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => this.props.handUpDown(this.props.user)}>Hand
                                    down</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>*/}

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
        setTypeMessage: setTypeMessage}, dispatch)
}



export default connect(mapStateToProps, matchDispatchToProps)(ActionBar);

