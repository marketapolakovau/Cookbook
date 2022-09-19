import { useState, useContext } from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import { Button } from "react-bootstrap";
import AddRecipeForm from "./AddRecipeForm";
import DeleteModal from "./DeleteModal";
import UserContext from "../UserProvider";

function RecipeTableCard({ recipe, ingredients }) {
  const { isAuthorize } = useContext(UserContext);
  const [updateShow, setUpdateShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <tr key={recipe.id}>
        <td>{recipe.name}</td>

        <td>{recipe.description}</td>
        {isAuthorize && (
          <td>
            <Button
              variant="outline-dark"
              onClick={() => {
                setUpdateShow(!updateShow);
              }}
            >
              <Icon size={1} path={mdiPencil} />
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => {
                setShowDeleteModal(!showDeleteModal);
              }}
            >
              <Icon size={1} path={mdiDelete} />
            </Button>
          </td>
        )}
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
      {showDeleteModal === true && (
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          recipe={recipe}
        />
      )}
    </>
  );
}

export default RecipeTableCard;
