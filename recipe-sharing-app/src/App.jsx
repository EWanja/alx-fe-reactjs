import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'
import RecipeDetail from './components/RecipeDetail';
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";


import './App.css'


function App() {
  
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <AddRecipeForm />
        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
