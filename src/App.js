import React, { Component } from 'react';
import './App.css';

const repoData = {
  username: "Purito",
  repos: [
    {
      name: "kitkat",
      link: "kitkat_link"
    },
    {
      name: "cottonball",
      link: "cottonball_link"
    }
  ]
};


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
          <h3>{repoData.username}</h3>
          <ul className="list-group col-6">
            {repoData.repos.map((item, index) =>
              (<li className="list-group-item" key={index}>{item.name}</li>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
