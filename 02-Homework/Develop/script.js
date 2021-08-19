// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = document.getElementByUd("password");


//arrays of possible character choices 
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['~', '!', '@', '#', '$', '%', '^', '&', '8','(', ')', '_', '+', '<', '>', '/', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function questions() {
 //!prompt number of characters 
  var length = parseInt(prompt("Choose password length between 8 and 128 characters."));
  //!get value from that prompt 
  //!strong password 
  if (length < 8 || length > 128 )

  {
    alert("Choose number between 8-128");
    return null; }
  var askNumbers = confirm("Do you want your password to include numbers?"
  );
  var askLowerCase = confirm("Do you want your password to include lower case letters?");
  var askUpperCase = confirm("Do you want your password to include upper case letters?");
  
  //!prompt whether to include special characters 
  var askSpecial = confirm("Do you want your password to include special characters?");
  
 //!validating if user choose one character 
  if (
    askNumbers === false &&
    askLowerCase === false &&
    askUpperCase === false &&
    askSpecial === false
  ) { alert ("You must choose one character") 
    
  }
  
  var pwInput = {
    length: length,
    numbers: askNumbers,
    lowercase: askLowerCase,
    uppercase: askUpperCase,
    special: askSpecial,
}

  return pwInput; 


}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
