let counterValue = 0;
const refs = {
    btnDecr: document.querySelector('[data-action="decrement"]'),
    btnIncr: document.querySelector('[data-action="increment"]'),
    counterSpan: document.querySelector('#value')
}

refs.btnDecr.addEventListener('click', onButtonDecrClick);
refs.btnIncr.addEventListener('click', onButtonIncrClick);

function onButtonDecrClick() {
    counterValue -= 1;
    updateTextContent();
}

function onButtonIncrClick() {
    counterValue += 1;
    updateTextContent();
}

function updateTextContent() {
    refs.counterSpan.textContent = counterValue;
}
