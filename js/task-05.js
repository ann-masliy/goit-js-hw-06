const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input',  event => {
	outputEl.textContent = event.target.value.trim()

	if (event.target.value === '') {
		outputEl.textContent = 'Anonymous'
	}
}) 

