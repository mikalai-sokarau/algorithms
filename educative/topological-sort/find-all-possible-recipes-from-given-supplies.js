/*
Statement:
A list of recipes a chef can prepare from the supplied items is given.
Ingredients required to prepare a recipe are mentioned in the ingredients list.
The i-th recipe has the name recipes[i], and you can create it if you have all the needed ingredients
from the ingredients[i] list. A recipe may be listed as an ingredient in a different recipe.
For example, the input may specify that custard is an ingredient in a trifle recipe or that trifle is an ingredient
in a custard recipe. Identify which recipes a chef can prepare from the given ingredients from the supplies list.

Note: It is also considered valid input for two recipes to list each other in their ingredients.
For example, the input may specify that custard is an ingredient in a trifle recipe and also that trifle
is an ingredient in a custard recipe. Of course, if those are the only two recipes provided in the input,
the expected output is an empty list.


Test:
Input:
recipes = [
  'fries',
  'burger',
  'sandwich'
]
ingredients = [
  ['potatoes', 'oil'],
  ['sauce', 'onion', 'fries', 'pepper', 'bun', 'meat'],
  ['cheese', 'fish', 'bread', 'sauce']
]
supplies = ['sauce', 'fish', 'onion', 'pepper', 'bun', 'bread', 'meat', 'cheese', 'potatoes']

Output:
['sandwich']


Complexity:
T: O(s + r + i + ...) : suplies + recipes + ingredients + ...
S: O(s + v + e) : suplies + vertecies + edges
*/

function findRecipes(recipes, ingredients, supplies) {
  const result = [];
  const sup = {};
  const adjacencyList = {};
  const productsList = {};
  const inDegree = {};
  const queue = [];

  for (const s of supplies) {
    sup[s] = true;
  }

  for (const r of recipes) {
    adjacencyList[r] = [];
    productsList[r] = [];
    inDegree[r] = 0;
  }

  for (let i = 0; i < recipes.length; i++) {
    const products = ingredients[i];

    for (const p of products) {
      if (adjacencyList[p]) {
        inDegree[recipes[i]]++;
        adjacencyList[p].push(recipes[i]);
      } else {
        productsList[recipes[i]].push(p);
      }
    }
  }

  for (const edge in inDegree) {
    if (inDegree[edge] === 0) {
      queue.push(edge);
    }
  }

  while (queue.length) {
    const curr = queue.shift();
    let allIngredientsFound = true;

    for (const ingredient of productsList[curr]) {
      if (!sup[ingredient]) {
        allIngredientsFound = false;
        break;
      }
    }

    if (allIngredientsFound) {
      result.push(curr);
      sup[curr] = true;

      for (const recipe of adjacencyList[curr]) {
        inDegree[recipe]--;

        if (inDegree[recipe] === 0) {
          queue.push(recipe);
        }
      }
    }
  }

  /*
    adjacencyList = {
      fries: [burger],
      burger: [],
      sandwich: []
    }
    inDegree = {
      fries: 0,
      burger: 1,
      sandwich: 0,
    }
    sup = {
      'sauce',
      'fish',
      'onion',
      'pepper',
      'bun',
      'bread',
      'meat',
      'cheese',
      'potatoes'
    }
  */

  return result;
}

console.log(
  findRecipes(
    ['fries', 'burger', 'sandwich'],
    [
      ['potatoes', 'oil'],
      ['sauce', 'onion', 'fries', 'pepper', 'bun', 'meat'],
      ['cheese', 'fish', 'bread', 'sauce'],
    ],
    [
      'sauce',
      'fish',
      'onion',
      'pepper',
      'bun',
      'bread',
      'meat',
      'cheese',
      'potatoes',
      'oil',
    ]
  )
);
