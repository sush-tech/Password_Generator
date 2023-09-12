// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
var finalCharacterList="";
var finalCharacterLength = 0;
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`\'{|}~';  //using \ to make it escape character!
var pass="";
let passwordLength = prompt("Select the password criteria : \n 1. Length of the password ");
let passwordLowercase = prompt("2.Should it include lowercase alphabet? ");
let passwordUppercase = prompt("3.Should it include Uppercase alphabet? ");
let passwordNumeric = prompt("3.Should it include numbers? ");
let passwordSplChars = prompt("4.Should it include Special Characters?");
if(passwordLength != 0){
  if(passwordLowercase == "yes"){
    finalCharacterList += lowerCase;
    finalCharacterLength += 26;
    }
  if(passwordUppercase == "yes"){
    finalCharacterList+= upperCase;
    finalCharacterLength += 26;
  }
  if(passwordNumeric == "yes"){
    finalCharacterList += numeric;
    finalCharacterLength += 10;
  }
  if(passwordSplChars == "yes"){
    finalCharacterList += specialChar;
    finalCharacterLength += 31;
  }
}
  for (var i = 0; i < passwordLength; i++ ) {
    pass += finalCharacterList[Math.floor(Math.random() * finalCharacterLength)];
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)