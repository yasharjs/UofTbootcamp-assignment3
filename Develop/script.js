//User input variables
var userInput;
var confirmNum;
var confirmUpper;
var confirmLower;
var confirmChar;

var userChoices;

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create an array of uppercase alphabetical characters
function upper(){
  var temp = [];
  for (var i = 0; i < alpha.length; i++){
      temp = temp.concat(alpha[i].toUpperCase());
     
      }
  return temp;
}

//call upper function
var alpha2 = upper();


//helper function
function checkConfirm()
{
  // Asks for user input
  userInput = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
  
  //First if statement for user validation
  if(!userInput){
    alert("You must choose a value.");
    return checkConfirm();
    
  } 
  //Validates user input
  else if(userInput < 8 || userInput > 128 ){
    alert("You must choose between 8 and 128.");
    return checkConfirm();

  } 

  else{
    return;
  }
 
}

//main function
function generatePassword() {

  checkConfirm();
  
  //Continues once user input is validated
  confirmNum = window.confirm("Would you like your password to contain numbers?");
  confirmLower = window.confirm("Would you like your password to contain lowecase letters?");
  confirmUpper = window.confirm("Would you like your password to contain uppercase letters?");
  confirmChar = window.confirm("Would you like your password to contain special characters?");

  //All 4 conditions are false
  if(!confirmChar && !confirmNum && !confirmUpper & !confirmLower){
    alert("You must choose a criteria!");
    return generatePassword();
  }
  //all 4 conditions are true
  else if (confirmChar && confirmNum && confirmUpper && confirmLower){
    userChoices = character.concat(number, alpha, alpha2);
  }

  //else if for 3 true conditions
  else if(confirmChar && confirmNum && confirmLower){
    userChoices = character.concat(number, alpha);
  }
  else if(confirmChar && confirmNum && confirmUpper){
    userChoices = character.concat(number, alpha2);
  }
  else if(confirmChar && confirmLower && confirmUpper){
    userChoicess = character.concat(alpha, alpha2);
  }
  else if(confirmNum && confirmLower && confirmUpper){
    userChoices = number.concat(alpha2, alpha);

  }

  //else if for 2 true conditions
  else if(confirmChar && confirmNum ){
    userChoices = character.concat(number);
  }
  else if(confirmChar && confirmLower){
    userChoices = character.concat(alpha);
  }
  else if(confirmChar && confirmUpper){
    userChoices = character.concat(alpha2);
  }
  else if(confirmLower && confirmNum){
    userChoices = alpha.concat(number);
  }
  else if(confirmLower && confirmUpper){
    userChoices = alpha.concat(alpha2);
  }
  else if(confirmNum && confirmUpper){
    userChoices = number.concat(alpha2);
  }

  //else if for 1 true condition
  else if(confirmChar){
    userChoices = character;
  }
  else if(confirmNum){
    userChoices = number;
  }
  else if(confirmLower){
    userChoices = alpha;
  }
  else if(confirmUpper){
    userChoices = alpha2;
  }

  //initialize password variable
  var passwordArray= [];
  var password = "";
  
  //loop to randomly generate password using user's given conditions
  for(var i = 0; i < userInput; i++){
    var temp = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordArray.push(temp);
    password += passwordArray[i];
  }
  

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
