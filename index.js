game()


























function game() {
  console.log(
 `
     _____________________________________________________
  / \\                                                     \\
 |   |                                                    |
  \\__| Chaos at CodeSmith! The evil Dr. Fib O'Nachi       |
     | and his two henchmen, Rick Cursion and Chloe Zhure |
     | have seized control.  They mercilessly teach       |
     | inferior lessons and are weakening the futures of  |
     | many aspiring software engineers. You must use your| 
     | skills to put an end to their meager teaching and  |
     | restore order to the technical world...            |
     |   _________________________________________________|____
     |  /                                                     /
     \\_/_____________________________________________________/
     `)
  
prompt('Press enter to save CodeSmith!')
  console.clear()
  console.log(
`
 .--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--.
/ .. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\
\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/ /
 \\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /
 / /\\/ /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\`' /\\/ /\\
/ /\\ \\/\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\\ \\/\\ \\
\\ \\/\\ \\                                                                        /\\ \\/ /
 \\/ /\\ \\    _________    _________ ________                          __       / /\\/ /
 / /\\/ /    \\_   ___ \\  /   _____/ \\_____  \\  __ __   ____   _______/  |_     \\ \\/ /\\
/ /\\ \\/     /    \\  \\/  \\_____  \\   /  / \\  \\|  |  \\_/ __ \\ /  ___/\\   __\\     \\ \\/\\ \\
\\ \\/\\ \\     \\     \\____ /        \\ /   \\_/.  \   |  /\\  ___/ \\___ \\  |  |       /\\ \\/ /
 \\/ /\\ \\     \\______  //_______  / \\_____\\ \\_/____/  \\___  >____  > |__|      / /\\/ /
 / /\\/ /            \\/         \\/         \\__>           \\/     \\/            \\ \\/ /\\
/ /\\ \\/                                                                        \\ \\/\\ \\
\\ \\/\\ \\.--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--./\\ \\/ /
 \\/ /\\/ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ /\\/ /
 / /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\/ /\\
/ /\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\/\\ \\
\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`'\\ \`' /
 \`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'\`--'
        
                                An interactive game by:
                                    Todd Alexander
                                    William Louis
                                    Lara Nichols
                                    Scott Thompson
`
);
  
  let start = prompt('Press enter to continue');
  console.clear();

  let player = character();
  console.log();
  let questions = encounter(player)
  if(questions.questionOne === true) {
    console.log(`You outsmarted Rick Cursion! Chris gave you a \'thumbs up\' emoji and an extra life!`)
    player.progPoints += 5;
    player.lives++;
  }
  if(questions.questionTwo === true) {
    console.log('Chloe Zhure was no match for you! Jinsung just sent you an extra life in the chat')
    player.progPoints += 5;
    player.lives++;
  }
  if(questions.questionOne === true && questions.questionTwo === true) {
    console.log('Chloe and Rick were sent to the Zoom Breakout Room of Shame!')
    // I'm gonna turn off game() and turn on encounter() so you can work on it.  OK. done
  }
  console.log()
  let result = combat(player);
  console.log()
  if(result === 0) {
    lose(player)
  }
  if(result > 0) {
    player.progPoints += result;
    win(player);
  }
}


function win(playerObj) {
  console.clear()
  prompt(
`
_________________________________________
|                                       |
|  Congratulations ${playerObj.name}!`+' '.repeat(20-playerObj.name.length)+`|
|  You have defeated the nefarious      |
|  Dr. O'Nachi and saved Codesmith!     |
|  Your name will be celebrated on      |
|  every corner of the MDN!             |
|                                       |
|_______________________________________|
`
);
console.clear()
prompt(`
You completed the game with:
${playerObj.progPoints} Program Points
Here is your prize:
                    _.--.
                _.-'_:-'||
            _.-'_.-::::'||
        _.-:'_.-::::::' ||
      .'\`-.-:::::::'    ||
    /.'\`;|:::::::'      ||_
    ||   ||::::::'     _.;._'-._
    ||   ||:::::'  _.-!oo @.!-._'-.
    \'.  ||:::::.-!()oo @!()@.-'_. |
    '.'-;|:.-'.&$@.& ()$%-'o.'\\U ||
      \`>'-.!@%()@'@_%-'_.-o _. |'||
        ||-._'-.@.-'_.-' _.-o  |'||
        ||=[ '-._.-\\U/.-'    o |'||
        || '-.]=|| |'|      o  |'||
        ||      || |'|        _| ';
        ||      || |'|    _.-'_.-'
        |'-._   || |'|_.-'_.-'
        '-._ '-.|| |' \\\`_.-'
            '-._||_/.-'
`)
credits()
}

function lose(playerObj) {
  console.clear()
  let string = '|'
  for(let i = 0; i < 100; i++) {
    console.log(string);
    string+= '*'
  }
  console.log(` ___________________________
|________Call_Stack_________|`)
  console.log('Oh no! Dr. O\'Nachi has flooded your Call Stack and you have hit Stack Overflow!')
  console.log('Please try again!')
}

function credits() {
  console.clear();
  prompt(`
  _________________________________________
  |                                       |
  |     CS Quest                          |
  |                                       |
  | Framework/ASCII Art: Scott Thompson   |
  | Character Creation: William Louis     |
  | Story/Encounter/Puns: Todd Alexander  |
  | Combat System: Lara Nichols           |
  |                                       |
  | ©2019 Thumbs Up, Ltd                  |
  |_______________________________________|
  `)
  console.clear()
  console.log('Thanks for playing CS Quest!')
}
//Todd's Code
function encounter(playerObj) { //placeholder
    // console.log('Encounter Phase: (Todd)')
    // let questionRight = prompt('Player answered question correct: true or false (enter for false)');
    // while(questionRight == 'info') {
    //   console.log(playerObj.info());
    //   questionRight = prompt('Player answered question correct: true or false (enter for false)');
    // }
    // if (questionRight == '') questionRight = 'false'
    // return (!(questionRight == 'false'))
  
  
    
  console.log(`

    Dr. Fib O'Nachi: At last we meet ${playerObj.name}. 
    I hear you are the one who wants to challenge
    my genius? How dare you try and take CodeSmith
    from me. FOOL! Now my henchmen will reduce you to 
    rubble! Rick, Chloe, do your worst!

  `)
  prompt('Press enter to continue!')
  console.log(`
    Rick Cursion: Lookee here hotshot, you want to get 
    to the boss you got to know how to tango. You 
    think you can create a recursive function? 
    Tell me ${playerObj.name}, what are you gonna write 
    to return out of it?? 

    A - function definition
    B - base case
    C - big O notation

  `)

  const isCorrect = {
    questionOne: true,
    questionTwo: false
  }

  function answerOne() {
    let response = prompt('Answer: ')
    const answers = 'AaBbCc'
    while (!answers.includes(response)) {
      console.log(`
    Rick Cursion: speak up I can't understand you.. 
    Is the answer A , B, or C??.
      
      `)
      response = prompt('Answer: ')
      // console.log('our response is ', response)
      // console.log(typeof response)
    }
    if (response === 'A' || response === 'a') {
      console.log(`  
    Rick Cursion: No dice amigo. Come back when 
    you've learned a thing or two.
      
      `)
      prompt('Press enter to continue!')
      return false
    } else if (response === 'B' || response === 'b') {
      console.log(`
    Rick Cursion: Dang, that's correct.  You just 
    blew my mind compadre. I can't compete!
      
      `)
      prompt('Press enter to continue!')
      return true
    } else if (response === 'C' || response === 'c') {
      console.log(`
    Rick Cursion: That's a big OH NO amigo. Come back 
    when you've learned a thing or two.
      
      `)
      prompt('Press enter to continue!')
      return false
    } 
  }
  
  isCorrect['questionOne'] = answerOne()
  console.log(`
    Chloe Zhure: Bonjour ${playerObj.name} or shall I say, 
    Au Revoir! Now for something a little harder, no? 
    Which one of zhese refers to the surrounding state of an 
    outer function's scope zhat can also be accessed from an 
    inner function? 

    A - Object Literal
    B - Analytical Satchel
    C - Persistent Lexical Scope Referenced Data

  `)

  function answerTwo() {
    let responseTwo = prompt('Answer: ')
    const answers = 'AaBbCc'
    while (!answers.includes(responseTwo)) {
      console.log(`
    Chloe Zure: Excusez-Moi!? Is the answer A , B, or C??.
      
      `)
      response = prompt('Answer: ')
    }
    if (responseTwo === 'A' || responseTwo === 'a') {
      console.log(`
    Chloe Zhure: Ah, no! I scoff at your inferiority. 
      
      `)
      prompt('Press enter to continue!')
      return false
    } else if (responseTwo === 'B' || responseTwo === 'b') {
      console.log(`
    Chloe Zhure: Ah, no! zhis answer is wrong. Now go fetch 
    my coffee.
      
      `)
      prompt('Press enter to continue!')
      return false
    } else if (responseTwo === 'C' || responseTwo === 'c') {
      console.log(`  
    Chloe Zhure: Sacre bleu! How did you know!? 
    My mind is blown away, I cannot deal with zhis shame!
      
      `)
      prompt('Press enter to continue!')
      return true
    } 
  }
  isCorrect['questionTwo'] = answerTwo()
  return isCorrect
}

//William's code
function character() {
  guysName = prompt("What is the player's name? ");
  if (guysName == '') guysName = 'Nameless';
  console.log(`
    In this game, you, ${guysName}, will be the 
    player navigating across various bosses in 
    the world of CSX. You start with 3 lives and 0 
    programming points. If you defeat all the bosses 
    and gain programming points along the way, you 
    will have successfully finished the game and 
    gained a spectacular prize along with it! Read 
    and type whatever the instructions tell you to do 
    so at each level of the game. 

    One key point to keep in mind:
    Arrays ([]) are superior to Primatives(#) 
    because they can hold more data.

    Objects ({}) are superior to Arrays([]) 
    because they organize more efficiently.

    Primatives(#) are superior to Objects({}) 
    because they are easier to access.

    Good luck player!
    `);
  prompt('Press enter to continue!')
  return {
    name: guysName,
    lives: 3,
    progPoints: 0,
    info: function () {
    return `The player, ${this.name}, has ${this.lives} lives left and ${this.progPoints} programming points.`
    }
  };
}
 //placeholder


function combat(playerObj){
  let character = playerObj;
  console.log(`

    Dr. Fib O'Nachi: Enough of this nonsense! 
    It's time I teach ${playerObj.name} a lesson...
    IN BATTLE.

    Prepare to fight!

  `)
//declare boss Health
let bossHealth = 3;

//battle takes place -- this is the main battle function. All other functions are called in this function
function battleBegins(playerCallback, bossCallback, assignNameCallback, attackComparison) {
  let rounds = 1;

  let playerAttack = 0;
  let playerAttackName = '';

  let bossAttack = 0;
  let bossAttackName = '';

    while (bossHealth > 0 && character.lives > 0) {
      console.log(`Time for round ${rounds}!`);
      playerAttack = playerCallback();
      bossAttack = bossCallback();

      playerAttackName = assignNameCallback(character.name, playerAttack);
      bossAttackName = assignNameCallback(`Dr. Fib O\'Nacci`, bossAttack);
      
      
      attackComparison(playerAttack, bossAttack);
      rounds++;
    }

  if (bossHealth === 0) {
    console.log(`${character.name} defeated Dr. Fib O'Nacci!`);
    return character.lives;
  }

  else if (character.lives === 0) {
    console.log(`Dr. Fib O'Nacci defeated ${character.name}!`);
    return character.lives;
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
    character.lives--;
  }
console.clear();
  
}



//call battleBegins to start fight
 return battleBegins(chooseYourAttack, bossAttackRandomizer, assignAttackName, compareAttacks);
}




let testPlayer = {
  name: 'Test Player',
  lives: 15
}

// encounter(testPlayer)




