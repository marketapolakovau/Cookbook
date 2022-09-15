import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/Home";
import IngredientList from "./routes/IngredientList";
import RecipeDetail from "./routes/RecipeDetail";
import RecipeList from "./routes/RecipeList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="recipeDetail" element={<RecipeDetail />} />
          <Route path="recipeList" element={<RecipeList />} />
          <Route path="ingredientList" element={<IngredientList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
