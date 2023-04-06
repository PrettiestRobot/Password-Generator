// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ["a","b","c","d","e","f","g","h",'i',"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// change the lower case array into a string. change the resulting string into upper case. Seperate eache result with a ,
var upperCase = String(lowerCase).toUpperCase().split(",");
var specialChar = ['!','@','#','$','%','^','&','*','_','-','+','.','?'];
var nums = [0,1,2,3,4,5,6,7,8,9];

function generatePassword () {
  var passwordBase = [];
  var passArray = [];

  // length prompt
  var passwordLength = prompt ("What is the length of you password. Length must be between 8 and 128 characters.");
  // length validation
  while (isNaN(passwordLength)) {
    passwordLength = prompt ('That is not a number. Please provide a number between 8 and 128.');
  }
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('Please select a number that is between 8 and less than 128');
  }

  // character promts
  var isLowerCase = confirm("Would you like to use lower case characters?");
  var isUpperCase = confirm("Would you like to include upper case characters");
  var isSpecialChar = confirm("Would you like to use special characters");
  var isNums = confirm("Would you like to use numbers");
  // character validation
  while (!isLowerCase && !isUpperCase && !isSpecialChar && !isNums) {
    alert("Please select at least one character type to continue");
    isLowerCase = confirm("Would you like to use lower case characters?");
    isUpperCase = confirm("Would you like to include upper case characters");
    isSpecialChar = confirm("Would you like to use special characters");
    isNums = confirm("Would you like to use numbers");
  }

  // create base password array
  if (isLowerCase) {
    passwordBase = passwordBase.concat(lowerCase);
    console.log(passwordBase);
  } 
  
  if (isUpperCase) {
    passwordBase = passwordBase.concat(upperCase);
    console.log(passwordBase);
  }

    if (isSpecialChar) {
    passwordBase = passwordBase.concat(specialChar);
    console.log(passwordBase);
  }

      if (isNums) {
    passwordBase = passwordBase.concat(String(nums).split(","));
    console.log(passwordBase);
  }
  
  // create password
  for (i=0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * i);
    passArray.push(passwordBase[randomIndex]);
  }

  return(passArray.join(""));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
