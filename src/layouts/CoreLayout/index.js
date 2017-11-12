import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const CoreLayout = ({ children }) => (
  <div className="page">
    <div className="page-header">
      <h2>Welcome to React</h2>
    </div>
    <div className="page-nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/counter">Counter</NavLink>
    </div>
    <div className="page-content">{children}</div>
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
