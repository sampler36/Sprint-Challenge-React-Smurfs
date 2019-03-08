import React, { Component } from 'react';
import Axios from 'axios';

const theSmurfsURL = 'http://localhost:3333/smurfs';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf:{
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
   Axios.post(theSmurfsURL, this.state.smurf)
        .then(res => {this.setState({ smurfs: [...res.data],  smurf: { 
         name: '',
         age: '',
         height: ''
        }
    });
  })
  }

  handleInputChange = e => {
    this.setState({smurf: {...this.state.smurf, [e.target.name]: e.target.value, }
     });
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.addSmurf}>
          <input className="smurform"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input className="smurform"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input className="smurform"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="smurform" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
