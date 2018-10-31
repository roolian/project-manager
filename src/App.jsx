import React, { Component } from 'react';
import logo from './logo.svg';
import './Lte.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PageProjects from "./PageProjects";
import ContentHeader from "./LayoutComponents";

//var reactjsAdminlte = require('adminlte-reactjs');

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>

          <header className="main-header">
            <a href="index2.html" className="logo">
              <span className="logo-mini"><b>A</b>LT</span>
              <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>
            <nav  className="navbar navbar-static-top" role="navigation">
            </nav>
          </header>

          <aside className="main-sidebar">
            <section className="sidebar">
              <Navigation />
            </section>
          </aside>

          <Content />

          <footer className="main-footer">
            <div className="pull-right hidden-xs">
              Anything you want
            </div>
            <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;

const Content = () => (
  <div className="content-wrapper">
      <section className="content container-fluid">
        <Route exact path="/" component={PageHome} />
        <Route path="/projects/:id?" component={PageProjects} />
      </section>
  </div>
);


const Navigation = () => (
    <div className="navbar-custom-menu">
      <ul className="sidebar-menu tree">
        <li className="header">
          General
        </li>
        <li className="active">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="header">
          Projects
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

    </div>
);

const PageHome = ({ match }) => (
  <div>
    <ContentHeader match={ match }/>
    <h2>Home</h2>
  </div>
);
