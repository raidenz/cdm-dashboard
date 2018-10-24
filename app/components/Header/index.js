import React from 'react';
import imgFace from 'images/face1.jpg';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/" href="/">
            CODEMI
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/" href="/">
            CODEMI
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify" />
                </div>
                <input
                  type="text"
                  className="form-control bg-transparent border-0"
                  placeholder="Search projects"
                />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <Link
                className="nav-link count-indicator dropdown-toggle"
                to="/"
                href="/"
              >
                <i className="mdi mdi-bell-outline" />
                <span className="count-symbol bg-danger" />
              </Link>
            </li>
            <li className="nav-item nav-profile dropdown">
              <Link className="nav-link dropdown-toggle" to="/" href="/">
                <div className="nav-profile-img">
                  <img src={imgFace} alt="imag-x" />
                  <span className="availability-status online" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">th deny</p>
                </div>
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
