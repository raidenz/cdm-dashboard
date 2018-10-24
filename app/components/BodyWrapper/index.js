import React from 'react';
import { Link } from 'react-router-dom';

const BodyWrapper = ({ children }) => {
  return (
    <div className="container-fluid page-body-wrapper">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <span className="menu-title">Home</span>
              <i className="mdi mdi-home menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">
              <span className="menu-title">Features</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-crosshairs-gps menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="menu-title">Icons</span>
              <i className="mdi mdi-contacts menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="menu-title">Forms</span>
              <i className="mdi mdi-format-list-bulleted menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="menu-title">Charts</span>
              <i className="mdi mdi-chart-bar menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="menu-title">Tables</span>
              <i className="mdi mdi-table-large menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="menu-title">Sample Pages</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-medical-bag menu-icon" />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-panel">
        {children}

        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2017 Bootstrap Dash. All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Hand-crafted &amp; made with{' '}<i className="mdi mdi-heart text-danger" />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default BodyWrapper;
