import React from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
