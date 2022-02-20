const passwordEl = document.getElementById("password");
const startBtn = document.querySelector("btn");

//Arrays created for the available characters in the random password
let special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "+",
  "&",
  "*",
  "!",
  "@",
  "#",
  "$",
  "%",
  "+",
  "&",
  "*",
  "!",
  "@",
  "#",
  "$",
  "%",
  "+",
  "&",
  "*",
];

let numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumbers,
  special: getRandomSpecial,
};
//functions for calling random characters from the called array
function getRandomLower() {
  let i = Math.floor(Math.random() * lower.length);
  return lower[i];
}
function getRandomUpper() {
  let i = Math.floor(Math.random() * upper.length);
  return upper[i];
}
function getRandomNumbers() {
  let i = Math.floor(Math.random() * numbers.length);
  return numbers[i];
}
function getRandomSpecial() {
  let i = Math.floor(Math.random() * special.length);
  return special[i];
}

// TODO working code!!!!!!!!
function promptMe() {
  let userLengthChoice = prompt(
    "please pick a length for your password between 8 and 128"
  );
  let passwordLength = userLengthChoice;
  let userSelection1 = [];
  if (passwordLength >= 8 && passwordLength <= 128) {
    let userUpperChoice = confirm(
      "would you like upper case letters in your password?"
    );
    if (userUpperChoice === true) {
      userSelection1 = userSelection1.concat(upper);
      console.log(userSelection1);
    } else {
    }
    let userLowerChoice = confirm(
      "would you like lower case letters in your password?"
    );
    if (userLowerChoice === true) {
      userSelection1 = userSelection1.concat(lower);
      console.log(userSelection1);
    } else {
    }

    let userSpecialChoice = confirm(
      "would you like special characters in your password?"
    );
    if (userSpecialChoice === true) {
      userSelection1 = userSelection1.concat(special);
      console.log(userSelection1);
    } else {
    }

    let userNumberChoice = confirm("would you like numbers in your password?");
    if (userNumberChoice === true) {
      userSelection1 = userSelection1.concat(numbers);
      console.log(userSelection1);
    } else {
    }
    //TODO create loop that cycles through the selected options!

    for (let index = 0; index < userLengthChoice.length; index++) {
      let finalPassword = finalPassword.concat(
        userSelection1[Math.floor(Math.random() * userLengthChoice.length)]
      );
    }

    let finalPassword = (document.getElementById("password").innerHTML =
      finalPassword);
  } else {
    alert("enter a number between 8 and 128 silly goose");
  }
}

let passwordParam = [
  getRandomLower(),
  getRandomNumbers(),
  getRandomUpper(),
  getRandomSpecial(),
];

// console.log(passwordParam[0])
