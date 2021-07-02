const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter button')
const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

let value = 0;

decrementBtn.addEventListener('click', decrement => {
    value -= 1;
    counterValue.textContent = value
})

incrementBtn.addEventListener('click', increment => {
    value += 1;
    counterValue.textContent = value
})