import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

const Navigation =()=> {
        return (
            <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={About} />
        </Switch>
      </Router>
        )
}

export default Navigation
