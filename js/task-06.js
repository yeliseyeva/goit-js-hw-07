const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {

    if (event.currentTarget.value.length === +event.currentTarget.dataset.length) {
        input.className = 'valid';
    } else {
        input.className = 'invalid';
    }
})