//If we add @refresh reset to the top of any file. then it will reset on any change in that component
// //@refresh reset
import { useState } from "react";

const evelenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 5,
};

const updatedRecipe = {
  ...evelenShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};

console.log(evelenShieldRecipe);
console.log(updatedRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>CurrentRecipe</h3>
      <button onClick={() => setRecipe(evelenShieldRecipe)}>
        ElvenShiedlRecipe
      </button>
      <button onClick={() => setRecipe(updatedRecipe)}>updatedRecipe</button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
