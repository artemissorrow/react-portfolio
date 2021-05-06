import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import ProjectContainer from "./components/Projects";
import "./App.css"


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
      <Route exact path={["/", "/about"]} component={About} />
      <Route exact path="/projects" component={ProjectContainer} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
