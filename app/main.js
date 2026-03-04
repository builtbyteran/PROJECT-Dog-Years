import { getDogYears } from './modules/getDogYears.js';

const myAge = 25;

const myName = 'Teran';

const myAgeInDogYears = (myName, myAge) => {
  console.log(
    `My name is ${myName}. I am ${myAge} years old, which is ${getDogYears(myAge)} years old in dog years.`,
  );
};

myAgeInDogYears(myName, myAge);

document.querySelector('#getDogYears').addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#setDogAge');
  const age = input.value.trim();
  const result = getDogYears(age);

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
