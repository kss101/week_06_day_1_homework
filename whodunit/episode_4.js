let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects); // This will show the suspects return from the function, with the first two as declared at the start, and the 3rd replaced by Col. Mustard, since suspectThree is reassigned in the function.
console.log(`Suspect three is ${suspectThree}.`); //This will show the original suspectThree value, Mrs. Peacock, as the function's reasignment will have no effect as it is an anonymous function, it is not "hoisted"