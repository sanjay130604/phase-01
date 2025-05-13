// src/components/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Dashboard from './components3/Dashboard';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '20px', background: '#f4f4f4' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="overview">Overview</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <main style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        {/* This is where the nested routes will be rendered */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
