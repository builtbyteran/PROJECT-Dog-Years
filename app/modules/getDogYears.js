export const getDogYears = (age) => {
  const earlyYears = 2 * 10.5;
  const laterYears = 4 * (age - 2);

  return earlyYears + laterYears;
};
