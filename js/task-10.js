function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes() {
  const boxArray = [];
  for (let i = 0; i <  Number(inputEl.value); i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.background = getRandomHexColor();
    boxArray.push(newDiv);
  }
  boxes.append(...boxArray);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  inputEl.value = "";
}

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);