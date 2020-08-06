import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSparkles} from "@fortawesome/free-solid-svg-icons";
import {select} from "../actions";
import PropTypes from 'prop-types';
import ShowStudents from "./ShowStudents";

class StudentList extends Component {

    showList() {
        return this.props.students.students.map((student) => {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-center"
                    onClick={() => this.props.select(student)}
                    key={student.name}>
                    {student.name}
                    {student.handUp === true ?
                        <FontAwesomeIcon icon={faHandSparkles}/> : ""
                    }
                </li>
            )
        });
    }


    render() {
        return (
            /*<ol>
                {this.showList()}
            </ol>*/

            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    eeeee
                    <FontAwesomeIcon icon={faHandSparkles}/>
                </li>
                {/*<ShowStudents students={this.props.students}/>*/}
                {this.showList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    };
}
/*const mapDispatchToProps = dispatch => {
    return {
        getStudents: dispatch(getStudents()),
    }
};*/

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(StudentList);

