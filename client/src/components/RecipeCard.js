import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Icon from "@mdi/react";
import AddRecipeForm from "./AddRecipeForm";

import { mdiPencil } from "@mdi/js";

function RecipeCard({ recipe, ingredients }) {
  const [updateShow, setUpdateShow] = useState(false);
  return (
    <>
      <Col>
        <Card>
          <Icon
            size={1.2}
            path={mdiPencil}
            className="update"
            onClick={() => {
              setUpdateShow(!updateShow);
            }}
          />

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
    </>
  );
}

export default RecipeCard;
