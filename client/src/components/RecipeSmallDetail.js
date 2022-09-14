import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function RecipeSmallDetail({ recipes }) {
  return (
    <Row
      style={{ margin: "1rem", backgroundColor: "#f8edeb" }}
      xs={1}
      md={3}
      className="g-4"
    >
      {recipes.map((recipe) => {
        return (
          <Col>
            <Card>
              <Card.Img variant="top" src={recipe.imgUri} alt={recipe.name} />
              <Card.Body>
                <Card.Title style={{ fontSize: "1.6rem" }}>
                  {recipe.name}
                </Card.Title>
                <Card.Text style={{ color: "grey", fontSize: ".9rem" }}>
                  {recipe.description.slice(0, 50) + "..."}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default RecipeSmallDetail;