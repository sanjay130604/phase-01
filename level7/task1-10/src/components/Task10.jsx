// src/components/LocationDisplay.js
import React from 'react';
import useGeolocation from '../hooks/useGeolocation';

const LocationDisplay = () => {
  const { location, error } = useGeolocation();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (location) {
    return (
      <div>
        <h2>Your Current Location:</h2>
        <p>Latitude: {location.latitude}</p>
        <p>Longitude: {location.longitude}</p>
      </div>
    );
  }

  return <div>Loading your location...</div>;
};

export default LocationDisplay;
