import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'


import './App.css'


function App() {
  
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <AddRecipeForm />

      <SearchBar />

      <RecipeList />
    </div>
    )
  
}

export default App
