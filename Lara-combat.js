//in full game would reference previously declared character object; have here for tests
//if you hit 0 as attack instead of 1, 2, 3, will take you to player win (after a couple of other things run, but much faster. Haven't figured out how to make that totally smooth yet...)
let character = {
  name: 'Lara',
  health: 5
};

//declare boss Health
let bossHealth = 3;

//battle takes place -- this is the main battle function. All other functions are called in this function
function battleBegins(playerCallback, bossCallback, assignNameCallback, attackComparison) {
  let rounds = 1;

  let playerAttack = 0;
  let playerAttackName = '';

  let bossAttack = 0;
  let bossAttackName = '';

    while (bossHealth > 0 && character.health > 0) {
      console.log(`Time for round ${rounds}!`);
      playerAttack = playerCallback();
      bossAttack = bossCallback();

      playerAttackName = assignNameCallback(character.name, playerAttack);
      bossAttackName = assignNameCallback(`Dr. Fib O\'Nacci`, bossAttack);
      
      
      attackComparison(playerAttack, bossAttack);
      rounds++;
    }

  if (bossHealth === 0) {
    console.log(`${character.name} defeated Dr. Fib O'Nacci`);
    return character.health;
  }

  else if (character.health === 0) {
    console.log(`Dr. Fib O'Nacci defeated ${character.name}!`);
    return character.health;
  }
  

}


//player chooses attack
function chooseYourAttack() {
  let playerAttack = prompt('Choose your attack! \n 1 -- primitive attack \n 2 -- array attack \n 3 -- object attack');
  if (playerAttack == 0) {
    bossHealth = 0;
  }
  if (isNaN(playerAttack)) {
    playerAttack = prompt('Choose 1, 2, or 3');
  } if (playerAttack < 0) {
    playerAttack = prompt('Choose 1, 2, or 3');
  } if (playerAttack > 3) {
    playerAttack = prompt('Choose 1, 2, or 3');
  }
  console.clear();
  return playerAttack;
}

//attack name assigned
function assignAttackName(name, num) {
  let attackName = '';
  if (num == 1) {
    attackName = 'primitive';
    prompt(`${name} chose primitive attack!`);
  } 
  if (num == 2) {
    attackName = 'array';
    prompt(`${name} chose array attack!`)
  }
  if (num == 3) {
    attackName = 'object';
    prompt(`${name} chose object attack!`)
  }
  return attackName;
}

//choose random number (1, 2, or 3) for boss's attack
function bossAttackRandomizer() {
  return Math.ceil(Math.random() * 3);
}

//compare attacks
function compareAttacks(playerNum, bossNum) {
  if (playerNum == bossNum) {
    prompt(`${character.name} and the Doctor chose the same Attack! No one takes damage.`)
  }
  if (playerNum == 1 && bossNum == 3) {
    playerNum = 4;
  }
  if (bossNum == 1 && playerNum == 3) {
    bossNum = 4;
  }
  if (playerNum > bossNum) {
    prompt(`${character.name}'s attack is stronger. Dr. Fib O'Nacci takes damage!'`);
    bossHealth--;
  }
  if (bossNum > playerNum) {
    prompt(`Dr. Fib O'Nacci's attack is stronger. ${character.name} takes damage.`)
    character.health--;
  }
console.clear();
  
}



//call battleBegins to start fight
battleBegins(chooseYourAttack, bossAttackRandomizer, assignAttackName, compareAttacks);