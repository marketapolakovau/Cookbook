import React from "react";
import Table from "react-bootstrap/Table";
import RecipeTableCard from "./RecipeTableCard";

function RecipeTable({ recipes, ingredients }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Název</th>
            <th>Postup</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => {
            return (
              <RecipeTableCard
                key={recipe.id}
                recipe={recipe}
                ingredients={ingredients}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default RecipeTable;
