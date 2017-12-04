import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="form-group row">
        <label htmlFor="input" className="col-1 col-form-label">Search: </label>
        <div className="col-3">
          <input type="text" className="form-control" />
        </div>
        <button type="button" className="btn btn-primary">Search</button>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
