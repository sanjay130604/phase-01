// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Overview from './components/Overview';
import Profile from './components/Profile';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route for the dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested routes for Overview, Profile, and Settings */}
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Optionally, you can add a default route */}
        <Route path="/" element={<h1>Welcome to the app!</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
