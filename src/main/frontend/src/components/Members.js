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
            /* <ul className="list-group">
                 <li className="list-group-item d-flex justify-content-between align-items-center">
                     eeeee
                     <FontAwesomeIcon icon={faHandSparkles} />
                 </li>
                 {
                     this.state.students.map((student)=>(
                         <il key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                             {student.name}
                             { student.handUp === true ?
                                 <FontAwesomeIcon icon={faHandSparkles} /> : ""
                             }
                         </il>
                     ))
                 }
             </ul>*/
            <StudentList/>
        );
    }
}

