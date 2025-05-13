// src/hooks/useGeolocation.js
import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const errorCallback = (err) => {
      if (err.code === err.PERMISSION_DENIED) {
        setError('User denied the request for Geolocation.');
      } else if (err.code === err.POSITION_UNAVAILABLE) {
        setError('Location information is unavailable.');
      } else if (err.code === err.TIMEOUT) {
        setError('The request to get user location timed out.');
      } else {
        setError('An unknown error occurred while retrieving location.');
      }
    };

    // Get user's current location
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    // Optionally, you can use watchPosition if you want continuous tracking
    // const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

    return () => {
      // Cleanup the watch if using watchPosition (comment out if not using)
      // navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { location, error };
};

export default useGeolocation;
