import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeDetailType from "../components/RecipeDetailType";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    fetch("http://localhost:8000/recipe/list")
      .then((res) => {
        if (res.status > 399) {
          setStatus("error");
          Promise.reject("error");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setRecipes(data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
    fetch("http://localhost:8000/ingredient/list")
      .then((res) => {
        if (res.status > 399) {
          setStatus("error");
          Promise.reject("error");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => {
        setStatus("error");
      });
  }, []);
  if (status === "success") {
    return <RecipeDetailType recipes={recipes} ingredients={ingredients} />;
  } else if (status === "pending") {
    return (
      <div className="pending">
        <Icon size={5} path={mdiLoading} spin={true} />
      </div>
    );
  } else {
    return (
      <div className="error">
        <div>Omlouváme se, ale recepty se nepodařilo načíst</div>
      </div>
    );
  }
}

export default RecipeList;
