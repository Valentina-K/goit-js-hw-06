const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const isInvalid = event.currentTarget.classList.contains('invalid');
    const isValid = event.currentTarget.classList.contains('valid');
    //if(inputRef.value.length === Number(inputRef.dataset.length)){
    if (event.currentTarget.value.length === parseInt(event.target.attributes["data-length"].value)) {
        if (!isValid) {
            event.currentTarget.classList.add('valid');
        }
        if (isInvalid) {
            event.currentTarget.classList.remove('invalid');
        }
    }
    else {
        if (!isInvalid) {
            event.currentTarget.classList.add('invalid');
        }
        if (isValid) {
            event.currentTarget.classList.remove('valid');
        }
    }

}