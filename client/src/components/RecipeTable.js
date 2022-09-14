import React from "react";
import Table from "react-bootstrap/Table";

function RecipeTable({ recipes }) {
  return (
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
            <tr>
              <td>{recipe.name}</td>
              <td>{recipe.description}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default RecipeTable;
