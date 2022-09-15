import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IngredientCard from "../components/IngredientCard";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

function IngredientList() {
  const [ingredients, setIngredients] = useState([]);
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    fetch("http://localhost:8000/ingredient/list")
      .then((res) => {
        if (res.status > 399) {
          setStatus("error");
          Promise.reject();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setIngredients(data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
  }, []);
  if (status === "success") {
    return <IngredientCard ingredients={ingredients} />;
  } else if (status === "pending") {
    return (
      <div className="pending">
        <Icon size={5} path={mdiLoading} spin={true} />
      </div>
    );
  } else {
    return (
      <div className="error">
        <div>Omlouváme se, ale seznam ingrediencí se nepodařilo načíst</div>
      </div>
    );
  }
}

export default IngredientList;
