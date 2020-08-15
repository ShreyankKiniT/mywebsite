import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Home from "./Home";

import Aboutme from "./Aboutme";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from  "./Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};
export default App;