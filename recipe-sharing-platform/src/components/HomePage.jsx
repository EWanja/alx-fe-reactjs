import React, { useState, useEffect } from "react";


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const res = await fetch("/src/data.json");
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error("Error loading recipes:", err);
      }
    }
    loadRecipes();
  }, []);

  return (
    <div className=" p-6 bg-gray-100">
      <h1 className="text-lg font-bold mb-6">Recipes</h1>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-100 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300 w-full"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 p-2">{recipe.title}</h2>
              <p className="mt-2  p-2 text-gray-600">{recipe.summary}</p>
              <button className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-800">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;