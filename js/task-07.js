const inputChangeEl = document.querySelector('input#font-size-control');
const spanChangeEl = document.querySelector('span#text');

function inputChange(event) {
    spanChangeEl.style.fontSize = `${event.target.value }px`
}

inputChangeEl.addEventListener('input', inputChange);