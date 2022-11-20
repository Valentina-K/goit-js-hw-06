const refs = {
  inputAmount: document.querySelector('input'),
  btnCreat: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  listBoxes: document.querySelector('#boxes')
};
let sizehEl = 30;

refs.btnCreat.addEventListener('click', onBtnCreateClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick() {
  createBoxes(refs.inputAmount.value);
}

function onBtnDestroyClick() {
  sizehEl = 30;
  destroyBoxes();
}

function createBoxes(amount) {  
  let element = '';
  for (let index = 0; index < amount; index++) {    
    element += `<div style="background-color: ${getRandomHexColor()}; width: ${sizehEl}px; height: ${sizehEl}px"></div>`;
    sizehEl += 10;    
  }
  refs.listBoxes.insertAdjacentHTML('beforeend', element);
}

function destroyBoxes() {
  refs.listBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
