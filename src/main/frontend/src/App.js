import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import SockJsClient from 'react-stomp';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login.js";
import Members from "./components/Members.js";
import ActionBar from "./components/ActionBar";
import Message from "./components/Message";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.setName=this.setName.bind(this);
    }

    initialState = {
        name: ""
    };


    setName = (name) => {
        console.log(name);
        this.setState({name: name});
    };

    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: this.state.name,
        }));
    };

    displayMessages = () => {
        return (
            <div>
                {this.state.messages.map(msg => {
                    return (
                        <div>
                            {this.state.name == msg.name ?
                                <div>
                                    <p className="title1">{msg.name} : </p><br/>
                                    <p>{msg.message}</p>
                                </div> :
                                <div>
                                    <p className="title2">{msg.name} : </p><br/>
                                    <p>{msg.message}</p>
                                </div>
                            }
                        </div>)
                })}
            </div>
        );
    };

    render() {
        return (
            <div>
                {/*<NameComponent setName={this.setName}/>
                <div className="align-center">
                    <h1>Welcome to Web Sockets</h1>
                    <br/><br/>
                </div>
                <div className="align-center">
                    User : <p className="title1"> {this.state.name}</p>
                </div>
                <div className="align-center">
                    <br/><br/>
                    <table>
                        <tr>
                            <td>
                                <TextField id="outlined-basic" label="Enter Message to Send" variant="outlined"
                                           onChange={(event) => {
                                               this.setState({typedMessage: event.target.value});
                                           }}/>
                            </td>
                            <td>
                                <Button variant="contained" color="primary"
                                        onClick={this.sendMessage}>Send</Button>
                            </td>
                        </tr>
                    </table>
                </div>
                <br/><br/>
                <div className="align-center">
                    {this.displayMessages()}
                </div>*/}


                <Router>
                    <ActionBar/>

                    <Switch>
                        <Route exact path="/message" component={Message}
                               name={this.state.name}/>
                        <Route exact path="/login" component={Login}
                               setName={this.setName}/>
                        <Route exact path="/members" component={Members}/>
                    </Switch>

                </Router>


                <SockJsClient url='http://localhost:8080/websocket-chat/'
                              topics={['/topic/user']}
                              onConnect={() => {
                                  console.log("connected");
                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={() => {
                                  console.log("message");
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
            </div>

        );
    }
}

export default App;
