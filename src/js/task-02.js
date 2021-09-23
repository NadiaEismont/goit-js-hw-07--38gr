const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const list = ingredients.map(ingredient => {
  const makeIngredientsList = document.createElement('li');
  makeIngredientsList.textContent = ingredient;
  return makeIngredientsList;
});

const ulList = document.querySelector('ul#ingredients');
ulList.append(...list);
console.log(ulList);