import { useState, useMemo } from "react";
import RecipeSmallDetail from "./RecipeSmallDetail";
import RecipeList from "./RecipeList";
import RecipeTable from "./RecipeTable";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Icon from "@mdi/react";
import {
  mdiTable,
  mdiArrowExpand,
  mdiArrowCollapse,
  mdiMagnify,
} from "@mdi/js";

function RecipeDetailType({ recipes, ingredients }) {
  console.log(recipes);
  console.log(ingredients);
  const [detailType, setDetailType] = useState("small");
  const [searchBy, setSearchBy] = useState("");
  //search for recipes
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      return (
        //search by name
        recipe.name
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase()) ||
        //search by description
        recipe.description
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase())
      );
    });
  }, [searchBy, recipes]);

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
          <Navbar.Brand>Seznam receptů</Navbar.Brand>
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
              <Button
                variant="outline-dark"
                onClick={() => {
                  setDetailType("small");
                }}
                className={"d-none d-md-block"}
              >
                <Icon size={1} path={mdiArrowCollapse} />{" "}
              </Button>
              <Button
                variant="outline-dark"
                onClick={() => {
                  setDetailType("large");
                }}
                className={"d-none d-md-block"}
              >
                <Icon size={1} path={mdiArrowExpand} />{" "}
              </Button>
              <Button
                variant="outline-dark"
                onClick={() => {
                  setDetailType("table");
                }}
                className={"d-none d-md-block"}
              >
                <Icon size={1} path={mdiTable} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div class="container">
        <div className={"d-block d-md-none"}>
          <RecipeList recipes={filteredRecipes} />
        </div>
        <div className={"d-none d-md-block"}>
          {detailType === "small" && (
            <RecipeSmallDetail
              recipes={filteredRecipes}
              ingredients={ingredients}
            />
          )}
          {detailType === "large" && <RecipeList recipes={filteredRecipes} />}
          {detailType === "table" && <RecipeTable recipes={filteredRecipes} />}
        </div>
      </div>
    </>
  );
}

export default RecipeDetailType;
