import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InformationPage = () => {
  return (
    <div>
      <h1>This is Information Page</h1>
      <ul>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="interesting">Interesting</Link>
        </li>
        <li>
          <Link to="location">Our Location</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default InformationPage;
