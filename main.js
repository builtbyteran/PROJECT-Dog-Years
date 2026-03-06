const getDogYears = (age, size) => {
  if (age <= 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;

  const yearsAfterTwo = age - 2;

  const rates = {
    small: 4.32,
    medium: 5.29,
    large: 6.29,
    giant: 7.29,
  };

  const rate = rates[size];

  if (!rate) {
    throw alert(`Unknown size. Use small, medium, large, or giant.`);
  }

  return Math.round(24 + yearsAfterTwo * rate);
};

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
