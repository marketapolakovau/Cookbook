import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function RecipeCard({ recipe }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={recipe.imgUri} alt={recipe.name} />
        <Card.Body>
          <Card.Title style={{ fontSize: "1.6rem" }}>{recipe.name}</Card.Title>
          <Card.Text style={{ color: "grey", fontSize: ".9rem" }}>
            {recipe.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RecipeCard;
