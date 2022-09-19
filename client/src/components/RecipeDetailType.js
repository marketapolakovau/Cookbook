import { useState, useMemo, useContext } from "react";
import RecipeSmallDetail from "./RecipeSmallDetail";
import RecipeList from "./RecipeList";
import RecipeTable from "./RecipeTable";
import AddRecipeForm from "./AddRecipeForm";
import UserContext from "../UserProvider";

import { Navbar, Button, Form } from "react-bootstrap";

import Icon from "@mdi/react";
import {
  mdiTable,
  mdiArrowExpand,
  mdiArrowCollapse,
  mdiMagnify,
  mdiPlus,
} from "@mdi/js";

function RecipeDetailType({ recipes, ingredients }) {
  const { isAuthorize } = useContext(UserContext);

  const [show, setShow] = useState(false);
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
    <div className="container">
      <Navbar collapseOnSelect expand="sm">
        <div className="container-fluid">
          <Navbar.Brand>Seznam receptů</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ justifyContent: "right" }}>
            <Form className="d-flex" onSubmit={handleSearch}>
              {/* search form */}
              <Form.Control
                id={"searchInput"}
                style={{ maxWidth: "150px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchDelete}
              />
              {/* search button */}
              <Button
                style={{ marginRight: "8px" }}
                variant="outline-dark"
                type="submit"
              >
                <Icon size={1} path={mdiMagnify} />
              </Button>
              {/* small card */}
              <Button
                variant="outline-dark"
                onClick={() => {
                  setDetailType("small");
                }}
                className={"d-none d-md-block"}
              >
                <Icon size={1} path={mdiArrowCollapse} />{" "}
              </Button>
              {/* large card */}
              <Button
                variant="outline-dark"
                onClick={() => {
                  setDetailType("large");
                }}
                className={"d-none d-md-block"}
              >
                <Icon size={1} path={mdiArrowExpand} />{" "}
              </Button>
              {/* table card */}
              <Button
                variant="outline-dark"
                onClick={() => {
                  setDetailType("table");
                }}
                className={"d-none d-md-block"}
              >
                <Icon size={1} path={mdiTable} />
              </Button>
              {/* open modal with add recipe form */}
              {isAuthorize && (
                <Button
                  variant="dark"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <Icon size={1} path={mdiPlus} />
                  Přidat recept
                </Button>
              )}
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {show === true && (
        <AddRecipeForm
          ingredients={ingredients}
          show={show}
          setShow={setShow}
          action="create"
        />
      )}
      <div className="container">
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
          {detailType === "large" && (
            <RecipeList recipes={filteredRecipes} ingredients={ingredients} />
          )}
          {detailType === "table" && (
            <RecipeTable recipes={filteredRecipes} ingredients={ingredients} />
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailType;
