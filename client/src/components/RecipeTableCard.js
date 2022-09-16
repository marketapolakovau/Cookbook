import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";
import { Button } from "react-bootstrap";
import AddRecipeForm from "./AddRecipeForm";

function RecipeTableCard({ recipe, ingredients }) {
  const [updateShow, setUpdateShow] = useState(false);
  return (
    <>
      <tr key={recipe.id}>
        <td>{recipe.name}</td>

        <td>{recipe.description}</td>
        <td>
          <Button
            variant="light"
            onClick={() => {
              setUpdateShow(!updateShow);
            }}
          >
            <Icon size={1} path={mdiPencil} />
          </Button>
        </td>
      </tr>
      {updateShow === true && (
        <AddRecipeForm
          updateShow={updateShow}
          setUpdateShow={setUpdateShow}
          ingredients={ingredients}
          recipe={recipe}
          action="update"
        />
      )}
    </>
  );
}

export default RecipeTableCard;
