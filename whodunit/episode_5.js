const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver'); // This will reasign the senario.weapon from 'Candle Stick' to 'Revolver' as, although scenario is declared as a const, whilst we can't change the whole object, we CAN change the values inside it!
  const verdict = declareWeapon(); // Due to the reasignment above, the return will have 'Revolver' as the scenario.weapon
  console.log(verdict);