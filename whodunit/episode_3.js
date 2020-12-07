let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict); // 1st verdict will be Mrs Peacock as the "let" variable declared at start will be overwritten within the scope of the function and returned.

const secondVerdict = `The murderer is ${murderer}.`;// 2nd verdict will be Prof Plum as the "let" variable declared at start will superceed the one in the function due to it's more localised scope.
console.log('Second Verdict: ', secondVerdict);