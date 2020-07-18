import React, {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./MemdersStyle.css";

import axios from "axios";
import {Redirect} from "react-router";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState
        this.studentChange = this.studentChange.bind(this);
        this.submitStudent = this.submitStudent.bind(this);

    }

    initialState = {
        name: ""
    }

    submitStudent = event => {
        event.preventDefault();

        const student = {
            name: this.state.name
        };


        axios.post("http://localhost:8080/members",student)

    }

    studentChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {name}=this.state;

        return (
            <Form onSubmit={this.submitStudent} id="studentFormId">
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required autoComplete="off"
                                  type="name"
                                  value={name} onChange={this.studentChange}
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