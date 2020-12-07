let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer(); // The murderer will be Mr. Green. The initial declaration of the murderer variable as Prof. Plum will be reassigned to Mr. Green due to the function call to "changeMurderer()". The internal functions of "plotTwist()" and "unexpectedOutcome()" have no effect on the current value of murderer due to the use of "let" in plotTwist()'s assingment of murderer, thus limiting any change to the scope of that function. This limitation also holds true for the reassingment of murderer within unexpectedOutcome()... it's value is only within the scope of it's parent function plotTwist(), again due to the latter's use of "let".
console.log(verdict);