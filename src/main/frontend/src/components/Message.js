import React, {Component} from "react";


import StudentList from "../contoiners/student-list"

export default class Message extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {/*<NameComponent setName={this.props.setName}/>*/}
                <div className="align-center">
                    <h1>Welcome to Web Sockets</h1>
                    <br/><br/>
                </div>
                <div className="align-center">
                    User : <p className="title1"> <StudentList/> </p>
                </div>


            </div>
        );
    }
}

