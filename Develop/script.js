// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById('generate');


var passParameters = ["lowercase", "uppercase"] // "numeric", "special"];
let paramArr = [];
function getParameters() {
for (i = 0; i < passParameters.length; i++) {
  let prompt = confirm('Would you like to use ' + passParameters[i] + ' characters in your password?');
  //console.log(passParameters[i]);
 
  if (prompt === true) {
    paramArr.push(passParameters[i])
  } else {
    break;
  }
}
return paramArr; 

}
getParameters(); 
console.log(paramArr.length);
/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/



// Random # syntax Math.floor((Math.random() * passLength) + 1);