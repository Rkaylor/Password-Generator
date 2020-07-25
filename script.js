var generateBtn = document.querySelector("#generate");

//Variables 
var lowerText = "abcdefghijklmnopqrstuvwxyz";
var upperText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var spcText = "$#@!~^&*()_+[]{}"; // might need more 
var nmbrstr = "0123456789";

var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var spclArr = "$#@!~^&*()_+[]{}".split(""); // could need modification
var nmbrArr = "0123456789".split("");

//Store user's input
var confirmNumbers = false;
var confirmUpper = false;
var confirmLower = false;
var confirmSpecial = false;
var lenPwdChosen = 0;

var minLen = 10;
var _password = "";

// log to see data
console.log(lowerCaseArr);
console.log(upperCaseArr);
console.log(spclArr);
console.log(nmbrArr);


// User Input - function 


lenPwdChosen = prompt("Enter the length of your password");
while (lenPwdChosen < minLen) {
  alert("Length of password has to be greater than 10");
  lenPwdChosen = prompt("Enter the length of your password");
} 

confirmNumbers = confirm("Do you want numbers in your password?");
confirmUpper = confirm("Do you want uppercase letters?");
confirmLower = confirm("Do you want lowercase letters?");
confirmSpecial = confirm("Do you want special characters?");


// Main Logic String 

if (confirmNumbers) {
  var index = Math.floor(Math.random() * nmbrArr.length);
  _password += nmbrArr[index];
}
console.log(_password);

if (confirmUpper) {
  var index = Math.floor(Math.random() * upperCaseArr.length);
  _password += upperCaseArr[index];
}
console.log(_password);

if (confirmLower) {
  var index = Math.floor(Math.random() * lowerCaseArr.length);
  _password += lowerCaseArr[index];
}
console.log(_password);

if (confirmSpecial) {
  var index = Math.floor(Math.random() * spclArr.length);
  _password += spclArr[index];
}
console.log(_password);

// Function: 
function generatePassword() {
  var remaining = lenPwdChosen - _password.length;
  var allChosenStr = "";

  
  if (confirmNumbers) {
    allChosenStr += nmbrstr;
  }
  if (confirmUpper) {
    allChosenStr += upperText;
  }
  if (confirmLower) {
    allChosenStr += lowerText;
  }
  if (confirmSpecial) {
    allChosenStr += spcText;
  }
  console.log(allChosenStr);

  for (var i = 0; i < remaining; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    _password += allChosenStr[index];
  }
  console.log('Password before randomized order', _password);

  
  var pwdArr = _password.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  _password = randomOrdered.join("");


  console.log("Final password", _password);
  return _password;
}

// Outputs Password
function writePassword() {
  // Calls Function 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates Button
generateBtn.addEventListener("click", writePassword);
