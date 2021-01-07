// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // 
  var UpperCaseYN = confirm("Do you want upper case letters included?");
  var LowerCaseYN = confirm("Do you want lower case letters included?");
  var NumberYN = confirm("Do you want numbers included?");
  var SpecialCharactersYN = confirm("Do you want special characters included?");
  if (UpperCaseYN == false && LowerCaseYN == false && NumberYN == false && SpecialCharactersYN == false) {
    alert("Password can't be created")
  };
  // if none are selected alert that a password can't be made under these conditions
  prompt("how many characters do you want in your password? (value must be between 8 and 128)")
  // 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


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

