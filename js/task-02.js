const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const list = document.querySelector('#ingredients');

const ingredientLi = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  return itemEl;
})

list.append(...ingredientLi)

// for (const ingredient of ingredients) {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   console.log(itemEl)

//   const list = document.querySelector('#ingredients');
//   list.append(itemEl)
// }





// Сделала несколько вариантов решения



// const list = document.querySelector('#ingredients');

// ingredients.map((ingredient) => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;

//   list.append(itemEl)
// })




// const list = document.querySelector('#ingredients');

// ingredients.map((ingredient) => {
//   const itemEl = document.createElement('li');

//   itemEl.append(ingredient);
//   list.append(itemEl)
// })





// const list = document.querySelector('#ingredients');

// const array = [];

// ingredients.map((ingredient) => {
//   const itemEl = document.createElement('li');

//   itemEl.textContent = ingredient;

//   array.push(itemEl)

//   list.append(...array)
// })