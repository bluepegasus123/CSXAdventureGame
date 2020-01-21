//William's code
function character() {
  guysName = prompt("What is the player's name? ");
  if (guysName == '') guysName = 'Nameless';
  console.log(`In this game, you, ${guysName}, will be the player navigating across various bosses in the world of CSX. You start with 3 lives and 0 programming points. If you defeat all the bosses and gain programming points along the way, you will have successfully finished the game and gained a spectacular prize along with it! Read and type whatever the instructions tell you to do so at each level of the game. 
  One key point to keep in mind:
  Arrays ([]) are superior to Primatives(#) because they can hold more data.
  Objects ({}) are superior to Arrays([]) because they organize more efficiently.
  Primatives(#) are superior to Objects({}) because they are easier to access.
  Good luck player!`);
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