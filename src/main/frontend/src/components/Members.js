import "../style/MemberStyle.css";

import React from 'react';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import StudentList from "../containers/student-list"
import SockJsClient from "react-stomp";
import {bindActionCreators} from "redux";
import {newMass, setTypeMessage} from "../actions";
import {connect} from "react-redux";
import ActionBar from "./ActionBar";


class Members extends Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div>
                <ActionBar client={this.props.client}/>
                {/*<SockJsClient url='http://localhost:8080/virtual-class/'
                              topics={['/topic/user']}
                              onConnect={() => {
                                  console.log("connected");

                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={(students) => {
                                  console.log("message");
                                  this.props.newMass(students);

                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>*/}

                <StudentList/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        students: state.students,
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({newMass: newMass, setTypeMessage: setTypeMessage}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Members);


