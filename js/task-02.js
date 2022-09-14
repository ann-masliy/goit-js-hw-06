const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrListEl = document.querySelector("#ingredients");
const items = ingredients.map(ingr => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingr;
  itemEl.className = "item";  
  return itemEl;
  
});

ingrListEl.append(...items);
console.log(ingrListEl);
