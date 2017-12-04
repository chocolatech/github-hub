import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input">Search: </label>
          <input type="text"/>
          <button type="button" className="btn btn-primary">Search</button>
        </form>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
