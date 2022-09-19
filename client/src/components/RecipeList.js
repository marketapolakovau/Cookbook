import React from "react";
import RecipeCard from "./RecipeCard";
import Row from "react-bootstrap/Row";

function RecipeList({ recipes, ingredients }) {
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              ingredients={ingredients}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default RecipeList;
