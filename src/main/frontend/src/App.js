import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import Login from "./components/Login.js";
import Members from "./components/Members.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {newMass, setTypeMessage} from "./actions";
import SockJsClient from "react-stomp";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {LoginSuccess: ""};
    }

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
                              }}/>

                <div>
                    {/*<Router>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/members" component={Members}/>
                        </Switch>
                    </Router>*/}

                    {this.props.user.name === "" ?
                        <Login client={this.clientRef}
                        sendMessage={this.sendMessage}/>
                        : <Members client={this.clientRef}/>}

                </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(App);
