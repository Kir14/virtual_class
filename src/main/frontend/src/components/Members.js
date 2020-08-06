import "../style/MemberStyle.css";

import React from 'react';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSparkles} from "@fortawesome/free-solid-svg-icons";

import StudentList from "../containers/student-list"


export default class Members extends Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
            <StudentList/>
        );
    }
}

