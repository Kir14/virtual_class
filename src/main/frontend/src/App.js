import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Members from "./components/Members";

import ActionBar from "./components/ActionBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
      <Router>
          <ActionBar/>

          <Switch>
              <Route exact path="/login" exact component={Login}/>
              <Route exact path="/members" exact component={Members}/>
          </Switch>

      </Router>
  );
}

export default App;
