import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Page header</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/about" activeClassName="is-active">About</NavLink>
      <NavLink to="/Contact" activeClassName="is-active">Contact</NavLink>
    </header>
  );
};

export default Header;
