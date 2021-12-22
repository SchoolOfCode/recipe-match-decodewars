//👉 Write your tests below here:
import { getIngredients } from "./main.js";

const recipe = {
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

test("When given a recipe, function should return a string with only ingredients from the recipe", () => {
  //arrange

  const expected = "bacon eggs bread";

  //act
  const actual = getIngredients(recipe);
  //assert
  expect(actual).toBe(expected);
});
