// Assignment Code
var generateBtn = document.querySelector("#generate");
var LowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var NumericCharacters = "0123456789 ".split("");
var SpecialCharacters = "!@#$%^&*_+- ".split("");
var GeneratedPassword = "";

// Write password to the #password input
function writePassword() {
  // 
  var UpperCaseYN = confirm("Do you want upper case letters included?");
  var LowerCaseYN = confirm("Do you want lower case letters included?");
  var NumberYN = confirm("Do you want numbers included?");
  var SpecialCharactersYN = confirm("Do you want special characters included?");
  // if none are selected alert that a password can't be made under these conditions

  if (UpperCaseYN == false && LowerCaseYN == false && NumberYN == false && SpecialCharactersYN == false) {
    alert("Password can't be created")
  } else {
    var PasswordLength = prompt("how many characters do you want in your password? (value must be between 8 and 128)")
    // need to add a alert here to ask user to enter appropriate number in one isn't chosen
    console.log(PasswordLength)
  }

  // change concatinated password alphabet string into an array (bank)

  var bank = LowerCaseCharacters;
  console.log(bank);

  // loop that takes the available characters and concatinates them until the chosen password length is reached

  for (var i = 0; i < PasswordLength; i++) {

    var num = Math.floor(Math.random() * bank.length) + 1;
    PasswordCharacter = bank[num];
    console.log(PasswordCharacter);

  }  
  //  var GeneratedPassword += PasswordCharacter;
  // 

  var password = generatePassword(); // why is this line here
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

