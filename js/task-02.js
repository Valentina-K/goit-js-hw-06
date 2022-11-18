const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");
/* const liElements = [];
ingredients.forEach((elem) => {
  const liRef = document.createElement("li");
  liRef.textContent = elem;
  liRef.classList.add('item');
  liElements.push(liRef);
});
ulEl.append(...liElements); */

const makeLiElements = textContents => {
  return textContents.map((textContent) => {
    const liRef = document.createElement("li");
    liRef.textContent = textContent;
    liRef.classList.add('item');
    
    return liRef;
  });
};
const liElements = makeLiElements(ingredients);
ulEl.append(...liElements);