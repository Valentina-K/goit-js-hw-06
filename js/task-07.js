const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.addEventListener('input', onChangeValue);
function onChangeValue(event) {
    spanRef.setAttribute('style', `font-size: ${event.currentTarget.value}px`);
}