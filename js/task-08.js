const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const inputElements = {
        email: event.currentTarget.elements['email'].value,
        password: event.currentTarget.elements['password'].value
    }
    if ((inputElements.email === '')
        || (inputElements.password === '')) {
        alert('Все поля формы должны быть заполнены!');
    } else {
        console.log(inputElements);
        event.currentTarget.reset();
    }
    
}
/* const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
 */