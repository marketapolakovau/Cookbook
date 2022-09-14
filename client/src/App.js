import "./App.css";
import RecipeList from "./components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import recipes from "./data/recipes";
import RecipeDetailType from "./components/RecipeDetailType";

function App() {
  return <RecipeDetailType recipes={recipes} />;
}

export default App;
