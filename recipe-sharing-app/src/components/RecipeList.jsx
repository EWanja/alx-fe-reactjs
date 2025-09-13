import React from "react";
import { Link } from "react-router-dom"; 
import useRecipeStore from "./recipeStore";


const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </h3>
                <p>{recipe.description}</p>
                <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? "😖 Remove Favorite" : "😀 Add to Favorites"}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
