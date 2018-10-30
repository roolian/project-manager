import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PageProjects from "./PageProjects";

//var reactjsAdminlte = require('adminlte-reactjs');




class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;



const Navigation = () => (
  <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={PageHome} />
      <Route path="/projects/:id?" component={PageProjects} />
    </div>
  </Router>
);

const PageHome = () => (
  <div>
    <h2>Home</h2>
  </div>
);
