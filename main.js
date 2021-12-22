/* //Write a function that takes in a recipe as an obejct and returns an string with just the incredients from the recipe. Make sure the string has no spaces at the end.
👉 Write your kata here! 
*/ export function getIngredients(recipe) {
  let string = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    string += recipe.ingredients[i].name + " ";
  }
  return string.trimEnd();
}

//👉 Write the function your CodeWarriors will start with below here:

//Write a function that takes in a recipe as an obejct and returns an array with just the incredients from the recipe.
let baconAndEggSanwich = {
  ingredients: [
    { name: "bacon", quantity: 3 },
    { name: "eggs", quantity: 1 },
    { name: "bread", quantity: 2 },
  ],

  instructions: [
    "1. Cook bacon in frying pan",
    "2. fry eggs in oil",
    "3.put bread in toaster",
  ],
};

console.log(getIngredients(baconAndEggSanwich));
