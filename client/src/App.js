import './App.css';

function App() {
  const recipeName={
    name: '5 Ingredient Lasagna'
  }
  return (
    <div className="app">
      <h1>{recipeName.name}</h1>
      <div>
        <p>
          This will be the easiest lasagna you have ever made- guaranteed! Our 5
          Ingredient Lasagna is so simple to make and is delicious!
        </p>
        <ul>
          <li>Preparation time: <strong>20 minutes</strong></li>
          <li>Difficulty: <strong>easy</strong></li>
        </ul>
      </div>
      <span>
        <strong>Ingredients</strong>
        <ul>
          <li>Cheddar Cheese</li>
          <li>Bertoli Spaghetti Sauce</li>
          <li>Butter</li>
          <li>Ground Beef</li>
          <li>No-Boil Lasagna Noodles</li>
        </ul>
      </span>
      <span>
        <strong>Procedure</strong>
        <ol>
          <li>Preheat your oven to 350 F and brown your ground beef.</li>
          <li>
            Layer lasagna dish with 1/4th of pasta sauce, 1/3rd of the ground
            beef, and 1/3rd of the cheese.
          </li>
          <li>
            Place a layer of noodles over top of the cheese, and dab with 3 TBS
            of butter
          </li>
          <li>Repeat the above step to make a total of three layers</li>
          <li>
            When the last layer of pasta noodles are placed add the last of the
            butter, sauce, and cheese
          </li>
          <li>Bake for 40 minutes</li>
          <li>Enjoy!</li>
        </ol>
      </span>
      <div>
        <img
          src="https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Lasagna on a plate"
        />

        <img
          src="https://images.pexels.com/photos/4078163/pexels-photo-4078163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Lasagna on a Glass Tray"
        />
      </div>
    </div>
  );
}

export default App;
