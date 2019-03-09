import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const theSmurfsURL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get(theSmurfsURL)
         .then(res => {this.setState(() => ({smurfs: res.data}));})
  }

  render() {
    return ( 
      <Router> 
      <div className="App">
        <Nav />
         <Route className="form" path='/home' component={Home} />

         <Route className="form" path='/smurf-form' component={SmurfForm} />

         <Route exact path='/smurfs' component={props => <Smurfs  smurfs={this.state.smurfs} />} />
      </div>
      
      </Router>
    );
  }
}

export default App;
