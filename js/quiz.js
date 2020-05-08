/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let answer = "";
answer = false;

// 2. Store the rank of a player
let rank = "";

// 3. Select the <main> HTML element
document.querySelector(`main`).innerHTML;

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let name = prompt("What is my name?");
let age = prompt("What is my age?");
let fam = prompt("How many family members do I have?");
let home = prompt("Where do I live?");
let job = prompt("Where do I work?");

let correct = 0;
if(name == "Brad"){
 correct += 1;
}
if(age == 27){
 correct += 1;
}
if(fam == 5){
 correct += 1;
}
if(home == "Atlanta"){
 correct += 1;
}
if(job == "Mailchimp"){
 correct += 1;
}
console.log(correct);
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correct == 5){
 rank = "Gold";
} else if (correct >= 3 && correct <= 4){
  rank = "Silver";
} else if (correct >=1 && correct <=2){
  rank = "Bronze";
} else if (correct == 0) {
  rank = "No crown";
}
console.log(rank);

// 6. Output results to the <main> element
document.querySelector(`main`).innerHTML = `<h2>Your rank is ${rank}!</h2>`;

