import React, {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../style/MemberStyle.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login} from "../actions";


class Login extends Component {

    constructor(props) {

        super(props);

        this.studentChange = this.studentChange.bind(this);
        this.submitStudent = this.submitStudent.bind(this);
    }


    submitStudent = event => {
        event.preventDefault();
        this.props.login(event.target.elements.name.value);
        if (!this.props.students.students.length === 0)
            this.setState(this.props.LoginSuccess = "OK");
        console.log(this.props.user);
    };

    studentChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
            return (
                <Form onSubmit={this.submitStudent} id="studentFormId">

                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required autoComplete="off"
                                      type="name"
                                      placeholder="Enter name"
                                      name="name"/>
                        <Form.Text className="text-muted">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
        students: state.students
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({login: login}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login)