import React, { useState } from "react";
import './App'


const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    imageUrl: "https://via.placeholder.com/150",
    ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon"],
    instructions: "Cook spaghetti, mix eggs with cheese, and combine with bacon.",
  },
  {
    id: 2,
    title: "Chicken Curry",
    imageUrl: "https://via.placeholder.com/150",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Garlic"],
    instructions: "Saute onions and garlic, add chicken, and cook with curry powder.",
  },
  {
    id: 3,
    title: "Avocado Toast",
    imageUrl: "https://via.placeholder.com/150",
    ingredients: ["Bread", "Avocado", "Salt", "Lemon Juice"],
    instructions: "Mash avocado, season with salt and lemon juice, and spread on toast.",
  },
];

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="recipe-container">
      <h2>Recipe Finder</h2>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFinder;
