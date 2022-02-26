// Get references to the #generate element
var generateBtn = document.getElementById('generate');
var password = document.getElementById('password');
var passParameters = ["lowercase", "uppercase", "numeric", "special"];
var paramArr = [];
var passLength = 0;
var count = 0;
var whatLength = "How long would you like your password to be?";

var randomCharCallback = {
  lowercase: lowercase(),
  uppercase: uppercase(),
  numeric: numeric(),
  special: special(),
};


//Calls appropriate function in randomParamGenerator to generate random character
var generatePassword = function () {
  for (i = 1; i < passLength; i++) {
    //get random number 1-4 to call pass param
    var randomParam = passParameters[Math.floor((Math.random() * 4))];
    var callback = randomCharCallback.randomParam;
    return callback;
  }
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
    return paramArr;
    return count;
    return passLength;
    generatePassword();
};

var getLength = function () {
  prompt(whatLength);
  if (typeof (prompt) !== number) {
    alert('Please enter only NUMBERS.')
    getLength();
  } else if (prompt < 8 || prompt > 128) {
    alert('Please enter a length between 8 and 128');
    getLength();
  } else {
    passLength = prompt;
    populateParameters();
  }
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