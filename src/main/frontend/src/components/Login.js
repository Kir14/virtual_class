import React, {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../style/MemberStyle.css";
import {connect} from "react-redux";
import {userReducer} from "../reducer/user";
import {bindActionCreators} from "redux";
import {login} from "../actions";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.studentChange = this.studentChange.bind(this);
        this.submitStudent = this.submitStudent.bind(this);


    }

    initialState = {
        name: ""
    };

    submitStudent = event => {
        event.preventDefault();

        this.props.login(event.target.elements.name.value);
        console.log(this.props.user);
        //this.setState(me.name : event.target.elements.name.value);
        //App.setState({name:this.state.name});


        //axios.post("http://localhost:8080/members",student)

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
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({login: login}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Login)