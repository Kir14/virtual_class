import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import SockJsClient from 'react-stomp';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login.js";
import Members from "./components/Members.js";
import ActionBar from "./components/ActionBar";
import {connect} from "react-redux";


class App extends Component {

    constructor(props) {
        super(props);
    }

    sendMessage = () => {
        console.log(this.props.students.students);
        console.log(this.props.user);
        this.clientRef.sendMessage('/app/user-all', JSON.stringify(this.props.students.students));
    };

    render() {
        return (
            <div>
                <ActionBar/>
                <div >
                    <Router>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/members" component={Members}/>
                        </Switch>
                    </Router>

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
                                      this.setState({students: msg});
                                  }}
                                  ref={(client) => {
                                      this.clientRef = client
                                  }}/>
                </div>
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

export default connect(mapStateToProps)(App);
