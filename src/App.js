import React from 'react';
import axios from "axios";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/lib/css/rbm-complete.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobSearch from './JobSearch';
import ActiveJobs from './ActiveJobs';
import ExpiredJobs from './ExpiredJobs';
import HomePage from './HomePage';
import Modals from './Modal';
// import useModal from './useModal';

function App() {
    
  return (
    
    <Router>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div class="mx-auto order-0">
          <h4 className="text-light">Find Your Dream Job!!!</h4>
        </div>
      </nav>    
      <Link to="/search" className="navbar-brand">Search</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/active" className="nav-link">Active Jobs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/expired" className="nav-link">Expired Jobs</Link>
            </li>
          </ul>
        </div>
      <br/> 
      <Route path="/" exact component={HomePage} />
      <Route path="/search" exact component={JobSearch} />
      <Route path="/active" exact component={ActiveJobs} />
      <Route path="/expired" exact component={ExpiredJobs} />
      </div>
    </Router>
    
    
    
  );
}
export default App;
