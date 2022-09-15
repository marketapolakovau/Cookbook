import { useState, useMemo } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

function IngredientCard({ ingredients }) {
  const [searchBy, setSearchBy] = useState("");

  const filteredIngredient = useMemo(() => {
    return ingredients.filter((ingredient) => {
      return (
        //search by name
        ingredient.name
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase())
      );
    });
  }, [searchBy, ingredients]);

  function handleSearch(event) {
    event.preventDefault();
    setSearchBy(event.target["searchInput"].value);
  }

  function handleSearchDelete(event) {
    if (!event.target.value) setSearchBy("");
  }
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light">
        <div className="container-fluid">
          <Navbar.Brand>Seznam ingrediencí</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ justifyContent: "right" }}>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                id={"searchInput"}
                style={{ maxWidth: "150px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchDelete}
              />
              <Button
                style={{ marginRight: "8px" }}
                variant="outline-dark"
                type="submit"
              >
                <Icon size={1} path={mdiMagnify} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Table>
        <thead>
          <tr>
            <th>Název</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {filteredIngredient.map((ingredient) => {
            return (
              <tr key={ingredient.id}>
                <td>{ingredient.name}</td>
                <td>{ingredient.id}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default IngredientCard;
