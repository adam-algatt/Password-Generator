//Global Variables
var generateBtn = document.getElementById('generate');
var passwordel = document.getElementById('password');
var passParameters = ["lowercase", "uppercase", "numeric", "special"];
var paramArr = [];
var passLength = 0;
var count = 0;
var whatLength = "How long would you like your password to be?";
var generatedPassword = "";

//Calls appropriate function in randomParamGenerator to generate random character
var generatePassword = function (num) {
  console.log('why god why?!');
  var password = "";
  //generates a char based on user-selected parameters, num is the password length
  for (i = 0; i < num; i++) {
    //get random number 1-4 to call pass param
    var randomNumberCeiling = paramArr.length;
    var passChar = paramArr[Math.floor(Math.random() * randomNumberCeiling)];

    if (passChar === 'lowercase') {
      password += String.fromCharCode(Math.random() * (123 - 97) + 97);
    } else if (passChar === 'uppercase') {
      password += String.fromCharCode(Math.random() * (91 - 65) + 65);
    } else if (passChar === 'numeric') {
      password += String.fromCharCode(Math.random() * (58 - 48) + 48);
    } else if (passChar === 'special') {
      password += String.fromCharCode(Math.random() * (48 - 33) + 33);
    } else {}

  };
  //adds generated password to passwordel text
  passwordel.textContent = password;
  //appends passwordel children
  passwordel.appendChild();
  return password;
}

//populates paramArr with user selected character types
var populateParameters = function () {
  paramArr = [];
  //iterates over char type options for user and populates, paramArr with selected options
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
  } else {

  }
  return paramArr;
};

generateBtn.addEventListener("click", function () {
  // gets user password length
  var lengthPrompt = prompt(whatLength);
  console.log(lengthPrompt);
  // if prompt returns NaN or outside min/max range, trigger another prompt
  if (isNaN(lengthPrompt) === true) {
    alert('Please enter only NUMBERS.')
    prompt(whatLength);
  } else if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert('Please enter a length between 8 and 128');
    prompt(whatLength);
  } else {

  }
  //changes prompt val from string to number
  passLength = parseInt(lengthPrompt);
  populateParameters();
  generatePassword(passLength);
});