const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");
const liElements = [];
ingredients.forEach((elem) => {
  const liRef = document.createElement("li");
  liRef.textContent = elem;
  liRef.classList.add('item');
  liElements.push(liRef);
});
ulEl.append(...liElements);