import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import SockJsClient from 'react-stomp';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login.js";
import Members from "./components/Members.js";
import ActionBar from "./components/ActionBar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {newMass} from "./actions";


class App extends Component {

    constructor(props) {
        super(props);
    }

    /*sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify(this.props.user));
    };*/

    render() {
        return (
            <div>
                <ActionBar/>
                <div >

                    {/*<Router>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/members" component={Members}/>
                        </Switch>
                    </Router>*/}

                    {this.props.user.name === "" ?
                        <Login /> : <Members/>}


                    {/*<SockJsClient url='http://localhost:8080/virtual-class/'
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
                                  }}/>*/}
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({newMass: newMass}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
