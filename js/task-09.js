const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color')
}
refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  refs.span.textContent = color;
  refs.body.setAttribute('style', `background-color: ${color}`);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
