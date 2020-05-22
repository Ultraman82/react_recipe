import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

export default function App() {
  const APP_ID = "4495d815";
  const APP_KEY = "3f99c7fac45b427ea4da258c62309750";

  const [receipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // onSubmit = (search) => {
  //   getRecipes(search);
  // };
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <div className="header">Edgar's yumyum</div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          value={search}
          type="text"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {receipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            link={recipe.recipe.url}
          ></Recipe>
        ))}
      </div>
    </div>
  );
}
