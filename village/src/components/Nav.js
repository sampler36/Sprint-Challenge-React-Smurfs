import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const Nav = () => {
    return (
      <Router>
      <div>
       <Route exact path="/" component={Smurfs} />
       <Route path="/smurf-form" component={SmurfForm} />
      </div>
      </Router>
    );
  }

  export default Nav;