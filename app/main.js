import { getDogYears } from './modules/getDogYears.js';

const myAge = 25;

const myName = 'Teran';

const myAgeInDogYears = (myName, myAge) => {
  console.log(
    `My name is ${myName}. I am ${myAge} years old, which is ${getDogYears(myAge)} years old in dog years.`,
  );
};

myAgeInDogYears(myName, myAge);

const renderDogCalculator = () => {
  document.getElementById('cta__button cta__button--primary').replaceChildren();
};
