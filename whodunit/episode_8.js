const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon(); // The murder weapon will be the candlestick. The call to "changeScenario()", updates the scenario.room to be dining room (since we can change elements inside the original declaration for scenario, despite the use of "const"). The call to plotTwist now takes place and the condition is true, due to the prior reassignment. This in turn allows for the changing of scenario.murderer to be Col. Mustard. Next, the call to unexpectedOutcome() is made and, again, the condition is now true, thus updating scenario.weapon to be "candelstick"! This is all due to the use of const and how it does not stop a change of it's internal values
  console.log(verdict);