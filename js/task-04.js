let counterValue = 0;

const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

function decrValue() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function incrValue() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

decrBtnEl.addEventListener('click', decrValue);
incrBtnEl.addEventListener('click', incrValue);