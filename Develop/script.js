// Get references to the #generate element
var generateBtn = document.getElementById('generate');
var password = document.getElementById('password');
var passParameters = ["lowercase", "uppercase", "numeric", "special"];
var paramArr = [];
var passLength = 0;
var count = 0;
var whatLength = "How long would you like your password to be?";
var generatedPassword = [];

 function lowercase() {
  generatedPassword.push(String.fromCharCode(Math.random() * (123 - 97) + 97));
  return generatedPassword;
};

 function uppercase() {
  generatedPassword.push(String.fromCharCode(Math.random() * (91 - 65) + 65));
  return generatedPassword;
};

 function numeric() {
  generatedPassword.push(String.fromCharCode(Math.random() * (58 - 48) + 48));
  return generatedPassword;
};

function special() {
  generatedPassword.push(String.fromCharCode(Math.random() * (48 - 33) + 33));
  return generatedPassword;
};


var randomCharCallback = {
  lowercase: lowercase(),
  uppercase: uppercase(),
  numeric: numeric(),
  special: special()
};


//Calls appropriate function in randomParamGenerator to generate random character
var generatePassword = function () {
  console.log('why god why?!');
  for (i = 0; i < 12; i++) {
    //get random number 1-4 to call pass param
    var randomNumberCeiling = (paramArr.length - 1);
    // console.log(typeof(randomParam));
    randomCharCallback[passParameters[Math.floor(Math.random() * randomNumberCeiling)]]; 
    // console.log(callRandom);
    
  }
  console.log('password:', generatedPassword);
  
};


var populateParameters = function () {
  for (i = 0; i < passParameters.length; i++) {
    let prompt = confirm('Would you like to use ' + passParameters[i] + ' characters in your password?');
    count++;
    //console.log(passParameters[i]);
    if (prompt === true) {
      paramArr.push(passParameters[i]);
    } else {

    }
  }
  //returns count to zero and initiates populateParameter function if user
  //doesn't select any parameters for their password
  if (count === 4 && paramArr.length === 0) {
  count = 0; 
  alert('Please select at least one parameter for your password');
  populateParameters(); 
}
  else {
    
  }
  console.log(paramArr);
  console.log(count);
  console.log('passlength:', passLength);
  generatePassword(passLength);
  return paramArr;
};

//Gets length of password and calls parameter function 
var getLength = function () {
  var lengthPrompt = prompt(whatLength);
  console.log(lengthPrompt);
  if (isNaN(lengthPrompt) === true) {
    alert('Please enter only NUMBERS.')
    getLength();
  } else if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert('Please enter a length between 8 and 128');
    getLength();
  } else {
 
  }
  passLength = parseInt(lengthPrompt); 
  populateParameters();
  return passLength;
};


generateBtn.addEventListener("click", getLength);





//  Write password to the #password input
// function writePassword(arr) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }  
//  Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);  
//  Random # syntax Math.floor((Math.random() * passLength) + 1);
// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// 