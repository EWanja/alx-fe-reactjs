import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/"); // go back to list
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: "white", background: "#d9534f", border: "none", padding: "6px 10px", borderRadius: 4 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
