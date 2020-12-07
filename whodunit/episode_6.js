let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer(); // The murderer will be Mrs White. The inital declaration of Col. Mustard will be reasigned to Mrs. Green due to the function call to "changeMurderer()". However, that function contains a call to "plotTwist()" which will reasigne the murderer to Mrs. WHite. The "const" on the functions doesn't prevent us from changing their internal variables; it only prevents us from reassigning them to some other function (or variable)
console.log(verdict);