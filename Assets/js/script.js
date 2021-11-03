var generateBtn = document.querySelector("#generate");
// Variables
var inputEnter;
var pwInput;

//arrays of possible numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//arrays of possible Uppercase letters
var upperCase = [
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
//arrays of possible lowercase
var lowerCase = [
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
//arrays of possible numbers
var special = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "8",
  "(",
  ")",
  "_",
  "+",
  "<",
  ">",
  "/",
];

function questions() {
  //!prompt number of characters
  var promptResult = prompt('Select a password length between 8 -128')
  var length = parseInt(promptResult );
  //!get value from that prompt
  //!strong password
  if (length < 8 || length > 128) {
    alert("Choose number between 8-128");
    return null;
  }
  var askNumbers = confirm("Do you want your password to include numbers?");
  var askLowerCase = confirm(
    "Do you want your password to include lower case letters?"
  );
  var askUpperCase = confirm(
    "Do you want your password to include upper case letters?"
  );

  //!prompt whether to include special characters
  var askSpecial = confirm(
    "Do you want your password to include special characters?"
  );

  //!validating if user choose one character
  if (
    askNumbers === false &&
    askLowerCase === false &&
    askUpperCase === false &&
    askSpecial === false
  ) {
    alert("You must choose one character");
  }
  pwInput = {
    length: length,
    numbers: askNumbers,
    lowercase: askLowerCase,
    uppercase: askUpperCase,
    special: askSpecial,
  };

  return pwInput;
}
function generatePassword() {
  var newPW;
  //var numbers;
  pwInput = questions()
  //what to pull the characters
  var characters = [];

  //its being assigned after this question function runs 
  if (pwInput.numbers) {
    // add numbers to characters  
  
    characters = characters.concat(numbers);
    
  }
  if (pwInput.lowercase) {
    //add lowercase to charaters 
    characters = characters.concat(lowerCase);
  }
  if (pwInput.uppercase) {
    //add lowercase to charaters 
    characters = characters.concat(upperCase);
  }
  if (pwInput.special) {
    //add lowercase to charaters 
    characters = characters.concat(special);
  }
  console.log(characters); 
  //for loop checking to see how long character array is and *
  for (var i = 0; i < pwInput.length; i++) {
    newPW += characters[Math.floor(Math.random()* characters.length)];
      console.log(newPW); 
  }
  console.log(newPW); 
  return newPW; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
