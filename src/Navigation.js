import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import Start from "./pages/Start";
import AddProjects from "./pages/AddProject";
import AddPerson from "./pages/AddPerson";
import AddReward from "./pages/AddReward";
import Artist from "./pages/Artist";
import Fan from "./pages/Fan";

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
        <Route exact path="/addPerson" component={AddPerson} />
        <Route exact path="/addProject" component={AddProjects} />
        <Route exact path="/addReward" component={AddReward} />
        <Route exact path="/fan" component={Fan} />
        <Route exact path="/artist" component={Artist} />
      </Switch>
    </Router>
  );
};

export default Navigation;
