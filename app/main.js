import { getDogYears } from './modules/getDogYears.js';

document.querySelector('#getDogYears').addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#setDogAge');
  const age = input.value.trim();
  const select = document.querySelector('#setDogSize');
  const size = select.value;

  const result = getDogYears(age, size);

  input.value = '';
  renderDogYears(result);
});

const renderDogYears = (result) => {
  document.querySelector('#setDogYears').replaceChildren();

  const template = `
    <h1>Your dog is ${result} years old!</h1>
  `;

  document
    .querySelector('#setDogYears')
    .insertAdjacentHTML('beforeend', template);
};
