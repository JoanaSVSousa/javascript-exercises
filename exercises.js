// This whole bunch of series of exercicies are ones that I made challenged by Angela Yu in the Udemy's course for Full Stack.

// These exercises are organized in increasing complexity as you scroll. 

// Ex -  Tweet Count
var tweet = prompt("Your Tweet");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you've " + (280 - tweetCount) + " left.");

// Ex - Tweet with Slice
var tweet = prompt("Your Tweet");
alert(tweet.slice(0,140));
//ou
alert(prompt("Your Tweet").slice(0,140));

// Ex - Dog Age Calculator  
var dogAge = prompt("Your Dog Age");
var humanAge = (dogAge - 2) * 4 + 21;
alet ("Your dog is " + humanAge + " years old in human years.");

// Ex - Life in Weeks until 90 years old .
function lifeInWeeks(age) {
var days = (90 * 365) - (age * 365);
    var weeks = (90 * 52) - (age * 52);
        var months = (90 * 12) - (age * 12);
  console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left.");
    }

 lifeInWeeks(26);

// Ex- BMI Calculator
function bmiCalculator(weight, height) {
    var bmi = (weight / Math.pow(height, 2));
    return Math.round(bmi);
}
bmiCalculator(65, 1.8);

// Ex - Love Calculator
prompt("What's your name?");
prompt("What's your mate's name?");
    var n = Math.random();
       n = n * 101;
n = Math.floor(n);
alert("You've " + n + "% compatibility.");

// Ex - Dice Game
    var n = Math.random();
       n = n * 6;
n = Math.floor(n)+1;
alert(n);

// Ex - Love Calculator with conditionals
prompt("What's your name?");
prompt("What's your mate's name?");
    var loveScore = Math.random()*100;
       loveScore = Math.floor(loveScore)+1;

if (loveScore > 70) {
  alert("You've " + loveScore + "% compatibility. You are a perfect match."); 
}
if (loveScore > 30 && loveScore <= 70) {
  alert("You've " + loveScore + "% compatibility. You guys are good."); 
}
if (loveScore >= 30) {
  alert("You've " + loveScore + "% compatibility. You guys are trouble."); 
}

// Ex - BMI Advanced with conditionals
function bmiCalculator(weight, height) {
    var bmi = (weight / Math.pow(height, 2));
  if (bmi < 24.9 && bmi > 18.5) {
    return ("Your BMI is " + bmi + ", so you have a normal weight.");
}
   if (bmi > 24.9) {
    return ("Your BMI is " + bmi + ", so you are overweight.");
}
  if (bmi < 18.5) {
    return ("Your BMI is " + bmi + ", so you are underweight.");
}
}
bmiCalculator(65, 1.8);

// Ex - Leap Year with conditionals
function isLeap(year) {
   if ((year % 4) === 0 && (year % 100) !== 0 || (year % 400) === 0){
    return ("Leap Year.");
} else {
  return ("Not Leap Year.");
}
}
    
isLeap(2000);

//Ex - Who's on the Guest List?

let yourName = prompt ("What's your name?");
const guestList = ["Bruno", "Ulisses", "Joana", "Igor"];
function guestCheck (yourName){
    if (guestList.includes(yourName) === true) {
        return ("Welcome!");
    } else {
        return ("Maybe next time!");
    }
}
guestCheck (yourName);

// Exercício 15 - Fizz Buzz 
let fizzNumber = [];

function fizzBuzz () {
for ( i=1; i<100; i++) {
if (i%3 === 0 && i%5===0) {
fizzNumber.push("FizzBuzz");
}
else if(i%3 === 0) {
fizzNumber.push("Fizz");
}
else if (i%5 === 0) {
fizzNumber.push("Buzz");
}
    else {
        fizzNumber.push(i);
    }
}
return fizzNumber;
}
