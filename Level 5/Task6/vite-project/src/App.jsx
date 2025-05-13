import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

const API_KEY = "YOUR_OMDB_API_KEY"; // Replace with your OMDb API Key

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch movies from OMDb API
  const fetchMovies = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.Error || "No movies found.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    }

    setLoading(false);
  };

  // Fetch movies when searchTerm changes
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchMovies();
    }, 500); // Debounce API calls to avoid excessive requests

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  return (
    <div className="movie-container">
      <h2>Movie Search</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
