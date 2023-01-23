// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\"


lowerUpperCase = lowerCase + upperCase //

lowerNumbers = lowerCase + numbers //

lowerSymbols = lowerCase + symbols //

lowerUpperCaseNumbers = lowerCase + upperCase + numbers

allCharacters = lowerCase + upperCase + numbers + symbols //

upperCaseNumbersSymbols = upperCase + numbers + symbols //

numbersSymbols = numbers + symbols //

upperCaseNumbers = upperCase + numbers //

upperCaseSymbols = upperCase + symbols //

lowerCaseNumbersSymbols = lowerCase + numbers + symbols //

function generatePassword() {
var passLeng = window.prompt("Please choose a number between 8 - 128 for your password length.")

if (passLeng >= 8 && passLeng <= 128) {
var lowerCasePrompt = window.confirm("Would you like your password to have lower case characters?")
var upperCasePrompt = window.confirm("Would you like your password to have upper case characters?")
var numbersCasePrompt = window.confirm("Would you like your password to have numbers?")
var symbolsCasePrompt = window.confirm("would you like your password to have symbols?")
} else if (!passLeng) {
  return "Your password does not meet the minimum requirements."
} else {
  return "Please input a number between 8 - 128."
}


if (!lowerCasePrompt && !upperCasePrompt && !numbersCasePrompt && !symbolsCasePrompt) {
return "Please choose at least one of the options."
} else if (lowerCasePrompt && upperCasePrompt && numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += allCharacters[Math.floor(Math.random() * allCharacters.length)]
  }
  return result
  //Completed loop for all characters
} else if (!lowerCasePrompt && upperCasePrompt && numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += upperCaseNumbersSymbols[Math.floor(Math.random() * upperCaseNumbersSymbols.length)]
  }
  return result
  // upperCase + numbers + symbols loop
} else if (!lowerCasePrompt && upperCasePrompt && numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += upperCaseNumbersSymbols[Math.floor(Math.random() * upperCaseNumbersSymbols.length)]
  }
  return result
  // numbersSymbols for loop
} else if (!lowerCasePrompt && !upperCasePrompt && numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += numbersSymbols[Math.floor(Math.random() * numbersSymbols.length)]
  }
  return result
  // upperCaseNumbers loop
} else if (!lowerCasePrompt && upperCasePrompt && numbersCasePrompt && !symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += upperCaseNumbers[Math.floor(Math.random() * upperCaseNumbers.length)]
  }
  return result
  // upperCaseSymbols loop
} else if (!lowerCasePrompt && upperCasePrompt && !numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += upperCaseSymbols[Math.floor(Math.random() * upperCaseSymbols.length)]
  }
  return result
  // lowerCaseNumbersSymbols loop
} else if (lowerCasePrompt && !upperCasePrompt && numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += lowerCaseNumbersSymbols[Math.floor(Math.random() * lowerCaseNumbersSymbols.length)]
  }
  return result
  // lowerUpperCase loop
} else if (lowerCasePrompt && upperCasePrompt && !numbersCasePrompt && !symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += lowerUpperCase[Math.floor(Math.random() * lowerUpperCase.length)]
  }
  return result
  // lowerNumbers loop
} else if (lowerCasePrompt && !upperCasePrompt && numbersCasePrompt && !symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += lowerNumbers[Math.floor(Math.random() * lowerNumbers.length)]
  }
  return result
  // lowerSymbols loop
} else if (lowerCasePrompt && !upperCasePrompt && !numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += lowerSymbols[Math.floor(Math.random() * lowerSymbols.length)]
  }
  return result
  // lowerUpperCaseNumbers loop
} else if (lowerCasePrompt && upperCasePrompt && numbersCasePrompt && !symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += lowerUpperCaseNumbers[Math.floor(Math.random() * lowerUpperCaseNumbers.length)]
  }
  return result
  // lower case loop
} else if (lowerCasePrompt && !upperCasePrompt && !numbersCasePrompt && !symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }
  return result
  // upper case loop
} else if (!lowerCasePrompt && upperCasePrompt && !numbersCasePrompt && !symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += upperCase[Math.floor(Math.random() * upperCase.length)]
  }
  return result
  // numbers loop
} else if (!lowerCasePrompt && !upperCasePrompt && numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += numbers[Math.floor(Math.random() * numbers.length)]
  }
  return result
  // symbols loop
} else if (!lowerCasePrompt && !upperCasePrompt && !numbersCasePrompt && symbolsCasePrompt) {
  var result = ""
  for (let i = 0; i < passLeng; i++) {
    result += symbols[Math.floor(Math.random() * symbols.length)]
  }
  return result
} 
}