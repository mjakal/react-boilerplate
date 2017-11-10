import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <header>
      <p>404 page not found</p>
      <Link to="/">Go to home page</Link>
    </header>
  );
};

export default NotFound;
