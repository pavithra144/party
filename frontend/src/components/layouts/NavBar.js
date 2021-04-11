import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

export const NavBar = () => {
  const { userAuth, user, logout, clearError } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
    clearError();
  };

  const userLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <span className="sm-hide">|</span>
      <li>
        <a href="#">
          <span className="sm-hide" onClick={logoutHandler}>
            Logout
          </span>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <i className="fas fa-glass-cheers">Party GRSVP</i>
        </h1>
      </div>
      <ul>{userAuth ? userLinks : authLinks}</ul>
    </div>
  );
};
