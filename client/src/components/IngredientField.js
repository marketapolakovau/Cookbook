import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";

function IngredientField({
  ingredients,
  ingredientData,
  setIngredientData,
  addIngredient,
  formData,
}) {
  const [isRequired, setisRequired] = useState(true);

  useEffect(() => {
    formData.ingredients.length > 0
      ? setisRequired(false)
      : setisRequired(true);
  }, [formData.ingredients.length]);
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
          value={ingredientData.id}
          name="id"
          onChange={handleChange}
          required={isRequired}
        >
          <option>{""}</option>
          {ingredients.map((ingredient) => {
            return (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            );
          })}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Zvolte ingredienci
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Form.Label>Počet</Form.Label>
        <Form.Control
          type="number"
          value={ingredientData.amount}
          name="amount"
          onChange={handleChange}
          min={1}
          max={1000}
          required={isRequired}
        />
        <Form.Control.Feedback type="invalid">
          Zadejte množství od 1 do 1000
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Form.Label>Jednotka</Form.Label>
        <Form.Control
          type="text"
          value={ingredientData.unit}
          name="unit"
          onChange={handleChange}
          maxLength={10}
          required={isRequired}
        />
        <Form.Control.Feedback type="invalid">
          Zadejte jednotku
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Button
          className="addIngredientDataBtn btn btn-sm"
          variant="outline-dark"
          onClick={() => {
            ingredientData.amount = +ingredientData.amount;
            ingredientData.name = ingredients.find(
              (ingredient) => ingredient.id === ingredientData.id
            )?.name;

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
