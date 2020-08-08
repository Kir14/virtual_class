import "../style/MemberStyle.css";

import React from 'react';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSparkles} from "@fortawesome/free-solid-svg-icons";

import StudentList from "../containers/student-list"
import SockJsClient from "react-stomp";
import {bindActionCreators} from "redux";
import {newMass} from "../actions";
import {connect} from "react-redux";


class Members extends Component {

    constructor(props) {
        super(props);
    };


    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify(this.props.user));
    };

    render() {
        return (
            <div>
            <SockJsClient url='http://localhost:8080/virtual-class/'
                          topics={['/topic/user']}
                          onConnect={() => {
                              console.log("connected");

                              this.sendMessage();
                          }}
                          onDisconnect={() => {
                              console.log("Disconnected");
                          }}
                          onMessage={(msg) => {
                              console.log("message");
                              console.log(msg);
                              this.props.newMass(msg);

                          }}
                          ref={(client) => {
                              this.clientRef = client
                          }}/>

            <StudentList/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        students: state.students,
        user:state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({newMass: newMass}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Members);


