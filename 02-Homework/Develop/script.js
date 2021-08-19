// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = document.getElementByUd("password");


//arrays of possible character choices 
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['~', '!', '@', '#', '$', '%', '^', '&', '8','(', ')', '_', '+', '<', '>', '/', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function questions() {
 
    isValid = true; 
  
  passwordText.value = password;

  
)

}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
