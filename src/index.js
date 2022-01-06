import './styles/index.scss';

const evelenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 5
}

const updatedRecipe = {
    ...evelenShieldRecipe,
    leather: 1,
    refinedMoonstone: 3
}

console.log(evelenShieldRecipe);
console.log(updatedRecipe);