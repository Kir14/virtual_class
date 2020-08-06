import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSparkles} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {bindActionCreators} from "redux";
import {select} from "../actions";
import {connect} from "react-redux";


const ShowStudents = ({students}) => {
    return students.students.map(student => (
            <li className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => this.props.select(student)}
                key={student.name}>
                {student.name}
                {student.handUp === true ?
                    <FontAwesomeIcon icon={faHandSparkles}/> : ""
                }
            </li>
        )
    )
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(matchDispatchToProps)(ShowStudents);