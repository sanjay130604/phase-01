import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import CSS

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setCategories(response.data.categories.map(cat => cat.strCategory));
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        const meals = response.data.meals || [];
        setRecipes(meals);
        setFilteredRecipes(meals);
        // Initialize ratings with default values
        const initialRatings = meals.reduce((acc, meal) => {
          acc[meal.idMeal] = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
          return acc;
        }, {});
        setRatings(initialRatings);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  useEffect(() => {
    let filtered = recipes;

    if (category !== "All") {
      filtered = filtered.filter(recipe => recipe.strCategory === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [searchTerm, category, recipes]);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>📖 Recipe Book</h1>
      </div>

      {/* Search & Filter */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Recipe List - Line-by-Line (Flex Row Alignment) */}
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <div className="recipe-details">
                <h3>{recipe.strMeal}</h3>
                <p>⭐ {ratings[recipe.idMeal] || "No Rating"}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default App;