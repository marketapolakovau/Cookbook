import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";
import AddRecipeForm from "./AddRecipeForm";

function RecipeSmallDetailCard({ recipe, ingredients }) {
  const [updateShow, setUpdateShow] = useState(false);
  return (
    <>
      <Col key={recipe.id}>
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
              {recipe.description.slice(0, 50) + "..."}
            </Card.Text>

            {recipe.ingredients.slice(0, 4).map((recipeIngredient) => {
              return ingredients.map((ingredient) => {
                if (ingredient.id === recipeIngredient.id) {
                  return (
                    <ul
                      style={{
                        color: "grey",
                        fontSize: ".9rem",
                        lineHeight: "1px",
                      }}
                      key={ingredient.id}
                    >
                      <li>{ingredient.name}</li>
                    </ul>
                  );
                } else {
                  return false;
                }
              });
            })}
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

export default RecipeSmallDetailCard;
