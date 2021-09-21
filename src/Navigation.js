import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import Start from "./pages/Start";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/start" component={Start} />
      </Switch>
    </Router>
  );
};

export default Navigation;
