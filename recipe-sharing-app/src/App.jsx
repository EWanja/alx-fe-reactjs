import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'


import './App.css'


function App() {
  
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <AddRecipeForm />
        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
