import React, { useState } from 'react'

function AddRecipeForm() {
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim() || !ingredients.trim() || !steps.trim()) {
            setError("All fields are required")
            return
        }
        const ingredientList = ingredients.split(",").map((i) => i.trim());
        if (ingredientList.length < 2) {
            setError("Please include at least 2 ingredients.")
            return
        }

        setError("")

        const newRecipe = {
            id: Date.now(),
            title,
            ingredients: ingredientList,
            steps,
        }
        console.log("Recipe submitted:", newRecipe);

        setTitle("");
        setIngredients("");
        setSteps("");
    }

    return (
         <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-xl shaown-md mt-8">
      <h2 className="text-lg font-bold  mb-6  text-center">Add New Recipe</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter recipe title"
          />
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="e.g. Pasta, Eggs, Cheese"
          ></textarea>
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Describe preparation steps"
          ></textarea>
        </div>

    
        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-800 transtion"
        >
          Add Recipe
        </button>
      </form>
    </div>
    )
}

export default AddRecipeForm