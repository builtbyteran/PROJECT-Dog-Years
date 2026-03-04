import { getDogYears } from './modules/getDogYears.js';

const fireConfetti = () => {
  // Left burst
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 80,
    origin: { x: 0, y: 0.6 },
  });

  // Right burst
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 80,
    origin: { x: 1, y: 0.6 },
  });
};

document.querySelector('#getDogYears').addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#setDogAge');
  const age = input.value.trim();
  const select = document.querySelector('#setDogSize');
  const size = select.value;

  const result = getDogYears(age, size);

  renderDogYears(result);
});

const renderDogYears = (result) => {
  document.querySelector('#setDogYears').replaceChildren();

  const template = `
    <h3 class='cta__title'>Your dog is ${result} years old!</h3>
  `;

  document
    .querySelector('#setDogYears')
    .insertAdjacentHTML('beforeend', template);

  fireConfetti();
};
