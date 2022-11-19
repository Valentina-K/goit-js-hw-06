const refs = {
  inputAmount: document.querySelector('input'),
  btnCreat: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  listBoxes: document.querySelector('#boxes')
};

refs.btnCreat.addEventListener('click', onBtnCreateClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick() {
  createBoxes(refs.inputAmount.value);
}

function onBtnDestroyClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  let sizehEl = 30;
  let element = `<div style="background-color: ${getRandomHexColor()}; width: ${sizehEl}px; height: ${sizehEl}px"></div>`;
  for (let index = 1; index < amount; index++) {
    sizehEl += 10;
    element += `<div style="background-color: ${getRandomHexColor()}; width: ${sizehEl}px; height: ${sizehEl}px"></div>`;
    
  }
  refs.listBoxes.insertAdjacentHTML('beforeend', element);
}

function destroyBoxes() {
  refs.listBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
