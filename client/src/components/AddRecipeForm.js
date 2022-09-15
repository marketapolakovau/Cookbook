import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import IngredientField from "./IngredientField";

function AddRecipeForm({ show, setShow, ingredients }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingredientItem: [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = (name) => {
    setFormData({
      ...formData,
      ingredientItem: formData.ingredientItem.filter((di) => di.name !== name),
    });
  };

  const [ingredientData, setIngredientData] = useState({
    name: "",
    count: 0,
    unit: "",
  });

  const addIngredient = (ingredientObject) => {
    setFormData({
      ...formData,
      ingredientItem: [...formData.ingredientItem, ingredientObject],
    });
    setIngredientData({ name: "", count: 0, unit: "" });
  };

  return (
    <>
      <Modal show={show}>
        <Form>
          <Modal.Header>
            <Modal.Title>Přidat recept</Modal.Title>
            <Icon
              size={1}
              path={mdiWindowClose}
              onClick={() => {
                setShow(!show);
              }}
            />
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Název</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Postup</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <IngredientField
              ingredients={ingredients}
              ingredientData={ingredientData}
              setIngredientData={setIngredientData}
              addIngredient={addIngredient}
            />
            <div>
              {formData.ingredientItem.map((i) => {
                return (
                  <Row>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>{i.name}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>{i.count}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>{i.unit}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Button
                        variant="danger"
                        className="btn btn-success btn-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(i.name);
                        }}
                      >
                        <Icon path={mdiWindowClose} size={1} />
                      </Button>
                    </Form.Group>
                  </Row>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ float: "right" }}
              variant="dark"
              className="btn btn-success btn-sm"
              onClick={() => {
                console.log(formData);
              }}
            >
              Přidat recept
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddRecipeForm;
