import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";

function IngredientField({
  ingredients,
  ingredientData,
  setIngredientData,
  addIngredient,
}) {
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setIngredientData({ ...ingredientData, [name]: value });
  };
  return (
    <Row>
      <Form.Group as={Col} className="mb-3">
        <Form.Label>Ingredience</Form.Label>
        <Form.Select
          value={ingredientData.name}
          name="name"
          onChange={handleChange}
        >
          <option value="" disabled>
            {""}
          </option>
          {ingredients.map((ingredient) => {
            return <option key={ingredient.id}>{ingredient.name}</option>;
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Form.Label>Počet</Form.Label>
        <Form.Control
          type="number"
          value={ingredientData.count}
          name="count"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Form.Label>Jednotka</Form.Label>
        <Form.Control
          type="text"
          value={ingredientData.unit}
          name="unit"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Button
          className="addIngredientDataBtn"
          variant="outline-dark"
          class="btn btn-success btn-sm"
          onClick={() => {
            addIngredient(ingredientData);
          }}
        >
          <Icon path={mdiPlus} size={1} />
        </Button>
      </Form.Group>
    </Row>
  );
}

export default IngredientField;
