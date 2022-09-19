import { React } from "react";
import Row from "react-bootstrap/Row";

import RecipeSmallDetailCard from "./RecipeSmallDetailCard";

function RecipeSmallDetail({ recipes, ingredients }) {
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
        {recipes.map((recipe) => {
          return (
            <RecipeSmallDetailCard
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

export default RecipeSmallDetail;
