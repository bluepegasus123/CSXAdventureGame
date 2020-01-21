// Todd
//  Encounter
//  scripted intro 
//  introduction of boss
//  input will be character object
//  boss will ask question
//  prompt player for input
//   if answer correctly, add two lives
//  output: correct amount of lives

// console.log("Chaos at CodeSmith! The evil Dr. Fib O'Nachi and his two henchmen, Rick Cursion and Chloe Zhure, have seized control. They mercilessly teach inferior lessons and are weakening the futures of many aspiring software engineers. You must use your skills to put an end to their meager teachings and restore order to the technical world once and for all...") 

console.log(`Dr. Fib O'Nachi: So we meet at last ${playerObj.name}. You think you can outsmart me? How dare you! My henchmen shall reduce you to rubble!

`)
prompt('Press enter to continue.')
console.log(`
Rick Cursion: Lookee here hotshot, you want to get to the boss you got to know how to tango. Answer me this ${playerObj.name}, you may think you can create a recursive function, but what are you gonna write to return out of it?? 

A - function definition
B - base case
C - big O notation

`)

function answerOne() {
  let response = prompt('Answer: ')
  if (response === 'A' || response === 'a') {
    console.log("Rick Cursion: No dice amigo. Come back when you've learned a thing or two.")
    return false
  } else if (response === 'B' || response === 'b') {
    console.log("Rick Cursion: Dang, that's correct.  You just blew my mind compadre."
    return true
  } else if (respone === 'C' || response === 'c') {
    console.log("Rick Cursion: That's a big OH NO amigo. Come back when you've learned a thing or two.")
    return false
  } else {
    console.log("Rick Cursion: speak up I can't understand you.. Is the answer A , B, or C??.")
    return false
  }
}

Console.log(
  `Chloe Zhure: Bonjour ${playerObj.name} or shall I say Au Revoir! Now for something a little harder, no? Which one of these refers to the surrounding state of an outer function's scope that can also be accessed from an inner function? 

  A - Crowned Oven Variety Endemic
  B - Analytical Satchel
  C - Persistent Lexical Scope Referenced Data

`)

function answerTwo() {
  let responseTwo = prompt('Answer: ')
  if (responseTwo === 'A' || responseTwo === 'a') {
    console.log("Chloe Zhure: Ah, no! I scoff at your inferiority. Try again.")
    return false
  } else if (responseTwo === 'B' || responseTwo === 'b') {
    console.log("Chloe Zhure: Ah, no! zis answer is wrong. Get me some coffee and try again.")
    return false
  } else if (responseTwo === 'C' || responseTwo === 'c') {
    console.log("Chloe Zhure: Sacre bleu! My mind is...how do you say? Blown away!")
    return true
  } else {
    console.log("Chloe Zure: Scuse moi? Is the answer A , B, or C??.")
    return false
  }
}

console.log(`Dr. Fib O'Nachi: AHHHHHH! You Fools! It's time I show ${playerObj.name} a REAL fight.  Prepare to battle!
`)








// 