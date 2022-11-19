const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === parseInt(event.target.attributes["data-length"].value)) {        
            event.currentTarget.classList.add('valid');        
            event.currentTarget.classList.remove('invalid');        
    }
    else {        
            event.currentTarget.classList.add('invalid');        
            event.currentTarget.classList.remove('valid');       
    }

}