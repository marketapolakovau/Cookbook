import "./App.css";
import RecipeList from "./components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import recipes from "./data/recipes";

function App() {
  return <RecipeList recipes={recipes} />;
}

export default App;
