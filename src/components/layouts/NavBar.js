import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <i className="fas fa-glass-cheers">Party GRSVP</i>
        </h1>
      </div>
      <ul>
        <li>Hello User</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#">
            <span className="sm-hide">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
