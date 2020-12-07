const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer(); // The murderer will be Professor Plum as, since "murderer" is declared a const at the start, it can't be reasigned later.
console.log(verdict);