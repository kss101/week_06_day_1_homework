let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer(); // The murderer will be Prof Plum, as the addition of the "let" prefixing the murderer reassignment as part of the IF statement limits its scope to only within the IF statement.
console.log(verdict);
