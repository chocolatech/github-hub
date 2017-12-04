import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="form-group row">
          <label htmlFor="input" className="col-1 col-form-label">Search: </label>
          <div className="col-3">
            <input type="text" className="form-control" />
          </div>
          <button type="button" className="btn btn-primary">Search</button>
        </div>
        <div className="user-list">
          <h3>Username</h3>
          <ul className="list-group col-6">
            <li className="list-group-item">First repo</li>
            <li className="list-group-item">Second repo</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
