import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import {bindActionCreators} from "redux";
import {handUpDown} from "../actions";
import {connect} from "react-redux";


class ActionBar extends Component {

    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Action" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => this.props.handUpDown(this.user)}>Hands
                                    up</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => this.props.handUpDown(this.user)}>Hand
                                    down</NavDropdown.Item>
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
}


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({handUpDown: handUpDown}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ActionBar);

