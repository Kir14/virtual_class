import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import SockJsClient from 'react-stomp';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login.js";
import Members from "./components/Members.js";
import ActionBar from "./components/ActionBar";
import Message from "./components/Message";

import {createStore} from "redux"
import allReducers from "./reducer/Reducer";
import {Provider} from "react-redux";



import ToDo from "./components/all_for_todo/ToDo";
import student from "./reducer/student";



class App extends Component {



    constructor(props) {
        super(props);


    }

    initialState = {
        name: ""
    };


    setName = (name) => {
        console.log(name);
        this.setState({name: name});
    };

    sendMessage = () => {
        console.log(student());
        this.clientRef.sendMessage('/app/user-all', student());
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
        const store = createStore(allReducers);

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

                <ActionBar/>

                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route  path="/message" component={Message}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/members" component={Members}/>
                            <Route exact path="/todo" component={ToDo}/>
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
                                  this.setState({students: msg});
                                  console.log("message");
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
                </Provider>
            </div>

        );
    }
}

export default App;
