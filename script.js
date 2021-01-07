// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  confirm("Do you want uppercase letters included?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 confirm("do you wasnt upper and lowercase letters?");
 
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// based on demo 8 i should have a series of confirms as a yes or no to special criteria
// ex lowercase
// ex uppercase
// ex numeric
// ex special characters
// var case = confirm("do you wasnt upper and lowercase letters?");

// once the confirms are done move to a prompt for password size 8 < # > 128 characters
// if else statements from demo 9
//     var howMuchRock = prompt("How many characters do you want in your password?");

// password is then validated like rps game and a random password is generated
// / demo 13

