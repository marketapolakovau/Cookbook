import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ recipe, showDeleteModal, setShowDeleteModal }) {
  const handleDelete = () => {
    fetch("http://localhost:8000/recipe/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: recipe.id }),
    })
      .then((res) => {
        if (res.status > 399) {
          Promise.reject();
        } else {
          return res.json();
        }
      })
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <Modal show={showDeleteModal}>
      <Modal.Header>
        <Modal.Title>Smazat recept</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Opravdu chcete recept {recipe.name} smazat?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="outline-dark"
          onClick={() => {
            setShowDeleteModal(!showDeleteModal);
          }}
        >
          NE
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          ANO
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
