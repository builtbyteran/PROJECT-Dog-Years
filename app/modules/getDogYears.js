export const getDogYears = (age, size) => {
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
