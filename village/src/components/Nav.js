import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
        <div className="App">
          <h1>Smurf Village</h1>
          <div className="nav">
            <Link className="link" to={'/home'}>Home</Link>
            <Link className="link"  to={'/smurf-form'}>Press Start</Link>
            <Link className="link"  to={'/smurfs'}>Smurfs</Link>
          </div>
        </div>
      </div>
    
    );
  }
  

  export default Nav;