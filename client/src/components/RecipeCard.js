import { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Icon from "@mdi/react";
import AddRecipeForm from "./AddRecipeForm";
import DeleteModal from "./DeleteModal";
import UserContext from "../UserProvider";
import { mdiPencil, mdiDelete } from "@mdi/js";

function RecipeCard({ recipe, ingredients }) {
  const { isAuthorize } = useContext(UserContext);
  const [updateShow, setUpdateShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <>
      <Col>
        <Card>
          {isAuthorize && (
            <div className="update-delete">
              <Icon
                size={1.2}
                path={mdiPencil}
                className="update"
                onClick={() => {
                  setUpdateShow(!updateShow);
                }}
              />
              <Icon
                size={1.2}
                path={mdiDelete}
                className="delete"
                onClick={() => {
                  setShowDeleteModal(!showDeleteModal);
                }}
              />
            </div>
          )}
          <Card.Img variant="top" src={recipe.imgUri} alt={recipe.name} />

          <Card.Body>
            <Card.Title style={{ fontSize: "1.6rem" }}>
              {recipe.name}
            </Card.Title>
            <Card.Text style={{ color: "grey", fontSize: ".9rem" }}>
              {recipe.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
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

export default RecipeCard;
