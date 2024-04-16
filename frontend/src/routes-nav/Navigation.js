import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Navigation.css";


const Navigation = () => {
    return (
      <nav className="Navigation navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          Yodlr
        </Link>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
      </nav>
    
    );

};
export default Navigation;