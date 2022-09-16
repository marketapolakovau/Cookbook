import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import IngredientField from "./IngredientField";

function AddRecipeForm({
  setShow,
  ingredients,
  action,

  setUpdateShow,
  recipe,
}) {
  const [, setShowDialog] = useState(false);
  useEffect(() => {
    setShowDialog(true);
  }, []);
  const [formData, setFormData] = useState({
    id: action === "create" ? null : recipe.id,
    name: action === "create" ? "" : recipe.name,
    description: action === "create" ? "" : recipe.description,
    imgUri:
      action === "create"
        ? "https://cdn-icons-png.flaticon.com/512/6774/6774898.png"
        : recipe.imgUri,
    ingredients: action === "create" ? [] : recipe.ingredients,
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = (id) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((di) => di.id !== id),
    });
  };

  const [ingredientData, setIngredientData] = useState({
    id: action === "",
    name: "",
    amount: 0,
    unit: "",
  });

  const addIngredient = (ingredientObject) => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ingredientObject],
    });
    setIngredientData({ id: "", name: "", amount: 1, unit: "" });
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || formData.ingredients.length < 1) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      fetch(
        `http://localhost:8000/recipe/${
          action === "create" ? "create" : "update"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((res) => {
          if (res.status > 399) {
            Promise.reject();
          }
        })
        .then((data) => {
          console.log("recept pridan");
        })
        .catch(() => {
          console.log("neco se pokazilo");
        });
    }
    setValidated(true);
  };
  const getIngredientsName = () => {
    recipe.ingredients.forEach((ing) => {
      ing.name = ingredients.find((i) => i.id === ing.id).name;
    });
  };
  action === "update" && getIngredientsName();
  return (
    <>
      <Modal
        show={setShowDialog}
        onHide={() => {
          action === "create" && setShow(false);
          action === "update" && setUpdateShow(false);
          setShowDialog(false);
        }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>
              {action === "create" ? "Přidat" : "Upravit"} recept
            </Modal.Title>
            <Button
              variant="light"
              onClick={() => {
                action === "create" && setShow(false);
                action === "update" && setUpdateShow(false);
              }}
            >
              <Icon size={1} path={mdiWindowClose} />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Název</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={50}
                required
              />
              <Form.Control.Feedback type="invalid">
                Zadejte název
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Postup</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Vyplňte postup
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Url adresa obrázku</Form.Label>
              <Form.Control
                type="text"
                name="imgUri"
                value={formData.imgUri}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Zadejte url adresu obrázku
              </Form.Control.Feedback>
            </Form.Group>
            <IngredientField
              ingredients={ingredients}
              ingredientData={ingredientData}
              setIngredientData={setIngredientData}
              addIngredient={addIngredient}
              formData={formData}
            />
            <div>
              {formData.ingredients.map((i) => {
                return (
                  <Row key={i.id}>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>{i.name}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>{i.amount}</Form.Label>
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
                          handleDelete(i.id);
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
              type="submit"
            >
              {action === "create" ? "Přidat" : "Upravit"} recept
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddRecipeForm;
