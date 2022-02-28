// Get references to the #generate element
var generateBtn = document.getElementById('generate');
var passwordel = document.getElementById('password');
var passParameters = ["lowercase", "uppercase", "numeric", "special"];
var paramArr = [];
var passLength = 0;
var count = 0;
var whatLength = "How long would you like your password to be?";
var generatedPassword = "";

// function lowercase() {
//   var lowerRand = String.fromCharCode(Math.random() * (123 - 97) + 97);
//   return lowerRand;
// };

// function uppercase() {
//   var upperRand = String.fromCharCode(Math.random() * (91 - 65) + 65);
//   return upperRand;
// };

// function numeric() {
//   var numRand =  String.fromCharCode(Math.random() * (58 - 48) + 48); 
//   return numRand;
// };

// function special() {
//   var specRand = String.fromCharCode(Math.random() * (48 - 33) + 33);
//   return specRand;
// };
// console.log(generatedPassword);




//Calls appropriate function in randomParamGenerator to generate random character
var generatePassword = function (num) {
  console.log('why god why?!');
  var password = "";

  for (i = 0; i < num; i++) {
    //get random number 1-4 to call pass param
    var randomNumberCeiling = paramArr.length;
     var passChar = paramArr[Math.floor(Math.random() * randomNumberCeiling)];
    // password += randomArr[passChar];
    if (passChar === 'lowercase'){
    password += String.fromCharCode(Math.random() * (123 - 97) + 97);
    }else if (passChar === 'uppercase'){
      password += String.fromCharCode(Math.random() * (91 - 65) + 65);
    } else if (passChar === 'numeric'){
      password += String.fromCharCode(Math.random() * (58 - 48) + 48);
    } else if (passChar === 'special') {
      password += String.fromCharCode(Math.random() * (48 - 33) + 33);
  } else {}

};
console.log('password:', password);
return password;
}


var populateParameters = function () {
  paramArr = [];
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
  console.log('paramArr:', paramArr);
  // console.log(count);
  console.log('passlength:', passLength);
  return paramArr;
};

generateBtn.addEventListener("click", function (){
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
