// sort
// https://www.toptal.com/developers/sorting-algorithms

// const numbers = [5, -3, 7, -1, 8, -6, 2, -9, 4, -7, 2];

numbers.sort((elementA, elementB) => {
  // console.log(elementA, elementB)
  return elementA - elementB;
}); // < 0 || > 0 || 0

// console.log(numbers);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
array.sort((elementA, elementB) => {
  return elementB.name.localeCompare(elementA.name);
});

// cocktailDetails[0].score = 20;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
// el método sort modifica el array original. Si queremos no modificarlo se deberá de utilizar el toSorted

// const cocktailDetailsOrdered = cocktailDetails.toSorted((elementA, elementB) => {
//   if (elementA.score === elementB.score) {
//     return elementA.name.localeCompare(elementB.name);
//   }
//   return elementB.score - elementA.score
// });

const newCocktailDetails = cocktailDetails.map((cocktailDetail) => {
  // cocktailDetail.ingredients.sort((a, b) => {
  //   return b.localeCompare(a)
  // });
  const ingredientsOrdered = cocktailDetail.ingredients.toSorted((a, b) => {
    return b.localeCompare(a);
  });

  cocktailDetail.ingredients = ingredientsOrdered;

  return cocktailDetail;
});

// console.log(newCocktailDetails);
// console.log(cocktailDetails);

// const objA = { x: 2, y: 34 };
// const objB = objA;

// objB.x = 4;
// console.log('objB --> ', objB);
// console.log('objA --> ', objA);

// filter

// const cocktailDetailsFilteredForEach = [];

// cocktailDetails.forEach((cocktailDetail) => {
//   if (cocktailDetail.score >= 8) {
//     cocktailDetailsFilteredForEach.push(cocktailDetail);
//   }
// })

// console.log('cocktailDetailsFilteredForEach --> ',cocktailDetailsFilteredForEach);

// const cocktailDetailsFiltered = cocktailDetails.filter((element, index, array) => {
//   if (element.score >= 8) {
//     return true;
//   }
//   return false;
// });

// console.log('cocktailDetailsFiltered --> ',cocktailDetailsFiltered);

// const cocktailDetails = [
//   {name: "Mojito", ingredients: ["Rum", "Mint", "Sugar", "Lime", "Club Soda"], score: 8},
//   {name: "Daiquiri", ingredients: ["Rum", "Sugar", "Lime"], score: 7},
//   {name: "Margarita", ingredients: ["Tequila", "Triple Sec", "Lime", "Salt"], score: 9},
//   {name: "Pina Colada", ingredients: ["Rum", "Coconut Milk", "Pineapple"], score: 8},
//   {name: "Bloody Mary", ingredients: ["Vodka", "Tomato Juice", "Spices"], score: 6},
//   {name: "Cosmopolitan", ingredients: ["Vodka", "Triple Sec", "Cranberry Juice", "Lime"], score: 8},
//   {name: "Old Fashioned", ingredients: ["Whiskey", "Bitters", "Sugar", "Water"], score: 7}
// ];

// const objTest = {
//   name: 'Mojito',
//   ingredients: ['Rum', 'Mint', 'Sugar', 'Lime', 'Club Soda'],
//   score: 8,
// };

// console.log(objTest.ingredients);
// const ingredients = ['Mint', 'Sugar', 'Lime', 'Club Soda'];

// let exists = false;
// objTest.ingredients.forEach((ingredient) => {
//   if (ingredient === 'Rum') {
//     exists = true;
//   }
// });
// console.log(exists);

// const cocktailDetailWithRum = cocktailDetails.filter((cocktailDetail) => {
//   let exists = false;
//   cocktailDetail.ingredients.forEach((ingredient) => {
//     if (ingredient === 'Rum') {
//       exists = true;
//     }
//   });
//   return exists;
// });

// const cocktailDetailWithRum = cocktailDetails.filter((cocktailDetail) => {
//   const ingredientsRum = cocktailDetail.ingredients.filter((ingredient) => {
//     return ingredient === 'Rum'
//   })
//   return ingredientsRum.length > 0
// });

// const cocktailDetailWithRum = cocktailDetails.filter((cocktailDetail) => {
//   return cocktailDetail.ingredients.includes('Rum');
// });

// console.log(cocktailDetailWithRum)

// const cocktails = ["Mojito", "Daiquiri", "Pina Colada", "Cosmopolitan"];
// const cocktailDetails = [
//   {name: "Mojito", ingredients: ["Rum", "Mint", "Sugar", "Lime", "Club Soda"], score: 8},
//   {name: "Daiquiri", ingredients: ["Rum", "Sugar", "Lime"], score: 7},
//   {name: "Margarita", ingredients: ["Tequila", "Triple Sec", "Lime", "Salt"], score: 9},
//   {name: "Pina Colada", ingredients: ["Rum", "Coconut Milk", "Pineapple"], score: 8},
//   {name: "Bloody Mary", ingredients: ["Vodka", "Tomato Juice", "Spices"], score: 6},
//   {name: "Cosmopolitan", ingredients: ["Vodka", "Triple Sec", "Cranberry Juice", "Lime"], score: 8},
//   {name: "Old Fashioned", ingredients: ["Whiskey", "Bitters", "Sugar", "Water"], score: 7}
// ];

// const findCocktails = (a) => {
//   const newCocktails = [];
//   cocktailDetails.forEach((cocktailDetail) => {
//     a.forEach((cocktail) => {
//       if (cocktailDetail.name === cocktail) {
//         newCocktails.push(cocktailDetail);
//       }
//     });
//   });
//   return newCocktails;
// };

// const findCocktails = (namesCocktail) => {
//   const newCocktails = [];
//   cocktailDetails.forEach((cocktailDetail) => {

//   });
//   return newCocktails;
// };

const findCocktails = (namesCocktail) => {
  const newCocktails = cocktailDetails.filter((cocktailDetail) =>
    namesCocktail.includes(cocktailDetail.name)
  );

  return newCocktails;
};

console.log(findCocktails(cocktails));
