import React from "react";
import {NavLink} from 'react-router-dom'

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    {/* <div className="container"> */}
      <NavLink className="navbar-brand" to="/todos">
      <i className="fas fa-calendar-check"></i> TodoApp
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/todos">
              Tarefas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
    {/* </div> */}
  </nav>
);
