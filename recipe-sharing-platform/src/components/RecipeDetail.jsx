import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

 
function RecipeDetail() {
    const { id } = useParams()
    const [ recipe, setRecipe] = useState(null)

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const res = await fetch("/data.json")
                const data = await res.json()
                const found = data.find((r) => r.id === parseInt(id))
                setRecipe(found)
            } catch (err) {
                console.error("Error fetching recipe:", err)
            }
        }
        
        fetchRecipe()
    }, [id])

  if (!recipe) return <p>Loading...</p>;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
            <img src={recipe.image} alt={recipe.title}
                className="w-full h-48 object-cover" />
            
            <h2 className="text-xl font-semibold text-gray-800 p-2">{recipe.title}</h2>
            <p className="mt-2  p-2 text-gray-600">{recipe.summary}</p>

            <ul className="list-disc list-inside text-gray-700">
                {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <h3 className="mt-4 font-semibold text-lg">Instructions</h3>
            <p className="text-gray-700">{recipe.instructions}</p>

            <Link to="/">
        <button className="mt-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
          Back to Home
        </button>
      </Link>
        </div>
        
    )
}

export default RecipeDetail