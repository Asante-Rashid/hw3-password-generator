// Assignment Code
var generateBtn = document.querySelector("#generate");
passwordText = document.querySelector("#password");

var LowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var NumericCharacters = "0123456789".split("");
var SpecialCharacters = "!@#$%^&*_+-".split("");
var CharBank = [];
var GeneratedPassword = "";

// Write password to the #password input
function writePassword() {
  characterInquiry();
}

function characterInquiry() {
  // character inquirer prompts
  var UpperCaseYN = confirm("Do you want upper case letters included?");
  if (UpperCaseYN) {
    CharBank.push.apply(CharBank, UpperCaseCharacters);
  }
  var LowerCaseYN = confirm("Do you want lower case letters included?");
  if (LowerCaseYN) {
    CharBank.push.apply(CharBank, LowerCaseCharacters);
  }
  var NumberYN = confirm("Do you want numbers included?");
  if (NumberYN) {
    CharBank.push.apply(CharBank, NumericCharacters);
  }
  var SpecialCharactersYN = confirm("Do you want special characters included?");
  if (SpecialCharactersYN) {
    CharBank.push.apply(CharBank, SpecialCharacters);
  }

  if (UpperCaseYN == false && LowerCaseYN == false && NumberYN == false && SpecialCharactersYN == false) {
    alert("Password can't be created without character specifications! Please try again.");
    end();
  } else {
    generatePassword();
  }
};

function generatePassword() {
  // passwordgenerator function using available character bank
  var PasswordLength = prompt("how many characters do you want in your password? (value must be between 8 and 128)");
  if (PasswordLength < 8 || PasswordLength > 125) {
    alert("Password can't be shorter than 8 characters or longer than 128");
    end();
  } else {
    // loop that takes the available characters and concatinates them until the chosen password length is reached
    for (var i = 0; i < PasswordLength; i++) {

      var num = Math.floor(Math.random() * CharBank.length) + 1;
      PasswordCharacter = CharBank[num];
      GeneratedPassword += PasswordCharacter;
    };

    passwordText.value = GeneratedPassword;
  };
};

function end() {
  passwordText.value = "";
  return;
};
//  event listener to generate button
generateBtn.addEventListener("click", writePassword);


