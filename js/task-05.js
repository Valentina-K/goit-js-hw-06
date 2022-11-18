const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', changeInputContent);

function changeInputContent() {
    refs.output.textContent = refs.input.value === '' ? 'Anonymous' : refs.input.value;
    
}