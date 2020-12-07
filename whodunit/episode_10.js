let murderer = 'Professor Plum';
var location = 'Library';

if (murderer === 'Professor Plum') {
  murderer = 'Mrs. Peacock';
}

const twist = function(){
  const location = 'Drawing Room';
  if (murderer ==='Professor Plum') {
   return location;
  } else {
    let location = 'Dining Room';
   return location;
  }
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

location = twist();

const declareMurdererLocation = function() {
  return `in the ${location}.`;
}

const verdict = declareMurderer();
location = declareMurdererLocation();
console.log("verdict is:", verdict, location);