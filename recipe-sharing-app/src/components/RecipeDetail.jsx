import React from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

     
      <EditRecipeForm recipeId={recipe.id} />

      
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;