// Assignment Code
var generateBtn = document.querySelector("#generate");

//adding my variable for randomizing password//
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z",];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialChar = ["!", "@", "#", "$", "%", "&", "*", "🐰","🍟" ];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var possibleChar = []
// user gets prompt for upper case
// user says yes put upper case into array

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(window.prompt("Choose a number between 8-26 characters"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 26) {
    window.alert("Length must be between 8 and 26 characters")
    writePassword()
  }

  //consider using radio buttons
  var possibleUpper = confirm("Would you like Upper case Letters?")
  var possibleLower = confirm("Would you like Lower case Letters?")
  var possibleSpec = confirm("Would you like Special Characters?")
  var possibleNum = confirm("Would you like Numbers?")


  // https://www.w3docs.com/snippets/javascript/how-to-copy-array-items-into-another-array.html
  // spread operator (accomplishes the same thing as for loops in some instances)
  if (possibleNum == true) {
    possibleChar.push(...numbers)
  };

  if (possibleLower == true) {
    possibleChar.push(...lowerCase)
  };

  if (possibleSpec == true) {
    possibleChar.push(...specialChar)
  };

  if (possibleUpper == true) {
    possibleChar.push(...upperCase)
  }; 
  
  // if (isNaN(passwordLength) || passwordLength >= 8 ||passwordLength < 26) {
  //   window.prompt("Do you want numbers? Yes/No")
  //   return
  //  }


  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(data) {
  var newPassword = [] 
  for (let i = 0; i < data; i++) {
    newPassword.push(possibleChar[Math.floor(Math.random() * possibleChar.length)])    
  }
  possibleChar = []
  return newPassword.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
