const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange => {
    refs.name.textContent = refs.input.value ?
        onInputChange.currentTarget.value : 'незнакомец';
})