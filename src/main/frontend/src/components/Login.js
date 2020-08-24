import React, {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../style/MemberStyle.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {isChange, login, setTypeMessage} from "../actions";


class Login extends Component {
    
    constructor(props) {

        super(props);

        this.studentChange = this.studentChange.bind(this);
        this.submitStudent = this.submitStudent.bind(this);
    }

    changeType = () => {
        this.props.setTypeMessage("JOIN");
    };

    sendMessageToLogin = () => {
        //console.log(this.props.user);
        this.props.sendMessage();
        //this.props.client.sendMessage('/app/user-all', JSON.stringify(this.props.user));
    };


    submitStudent = event => {
        event.preventDefault();
        this.props.login(event.target.elements.name.value);
        this.props.setTypeMessage("JOIN");
        //setTimeout(this.sendMessageToLogin,2000);

        this.sendMessageToLogin();


        //this.props.isChange(true);
        /*while(true){
            if(this.props.user.isChange===true){
                this.props.isChange(false);
                this.sendMessageToLogin();
                break;
            }
        }*/
        /*if (!this.props.students.students.length === 0)
            this.setState(this.props.LoginSuccess = "OK");*/

        console.log(this.props.user);
    };

    studentChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fetchData() {
        this.props.isChange(true);


    }

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            login: login,
            setTypeMessage: setTypeMessage,
            isChange: isChange
        },
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)