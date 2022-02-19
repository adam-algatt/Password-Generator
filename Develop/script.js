


// Get references to the #generate element
var generateBtn = document.getElementById('generate');
var passParameters = ["lowercase", "uppercase", "numeric", "special"];
var paramArr = [];
var passLength = prompt('How long would you like your password to be?', "Please enter a number between 8 and 128");
var count = 0;



//function confirms password parameters from user
let getParams = function() {
  for (i = 0; i < passParameters.length; i++) {
    let prompt = confirm('Would you like to use ' + passParameters[i] + ' characters in your password?');
   count++;   
    //console.log(passParameters[i]);
    if (prompt === true) {
      paramArr.push(passParameters[i]);
    } else {

    }
  }
  
  //prevents user from selecting a password with no character
  //types
  if (paramArr.length === 1 && count === 4) {
 "Select at least one pass variable."
 count = 0; 
 getParams();
  }
  return paramArr;
  return count; 
}
if (passLength >= 8 && passLength <= 128 && paramArr.length === 0) {
	paramArr.push(passLength); 
	getParams(); 
} 
//8=getParameters();
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
