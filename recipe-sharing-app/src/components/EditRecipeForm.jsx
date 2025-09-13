import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id.toString() === id)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return <p>No recipe found to edit.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title: title.trim(), description });
    navigate(`/recipes/${recipe.id}`); // back to details
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 600 }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} />
      <div>
        <button type="submit" style={{ marginRight: 8 }}>Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;

