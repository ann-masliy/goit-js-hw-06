function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const setColorEl = document.querySelector(".color");
const btnClickEl = document.querySelector(".change-color");

btnClickEl.addEventListener('click', event => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  setColorEl.textContent = color;
});
