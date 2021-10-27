// Assignment Code
var generateBtn = document.querySelector("#generate");
// this was given

var LowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var NumericCharacters = "0123456789 ".split("");
var SpecialCharacters = "!@#$%^&*_+- ".split("");
var CharBank = [];
var GeneratedPassword = "";

// Write password to the #password input
function writePassword() {
  // 
  var UpperCaseYN = confirm("Do you want upper case letters included?");
  if (UpperCaseYN) {
    CharBank.push.apply(CharBank, UpperCaseCharacters);
    console.log(CharBank);
    
  }
  var LowerCaseYN = confirm("Do you want lower case letters included?");
  if (LowerCaseYN) {
    CharBank.push.apply(CharBank, LowerCaseCharacters);
    console.log(CharBank)
  }
  var NumberYN = confirm("Do you want numbers included?");
  if (NumberYN) {
    CharBank.push.apply(CharBank, NumericCharacters);
    console.log(CharBank)
  }
  var SpecialCharactersYN = confirm("Do you want special characters included?");
  if (SpecialCharactersYN) {
    CharBank.push.apply(CharBank, SpecialCharacters);
    console.log(CharBank)
  }
  // if none are selected alert that a password can't be made under these conditions

  // if (UpperCaseYN == false && LowerCaseYN == false && NumberYN == false && SpecialCharactersYN == false) {
  //   alert("Password can't be created")
  // } else {
  //   var PasswordLength = prompt("how many characters do you want in your password? (value must be between 8 and 128)")
  //   // need to add a alert here to ask user to enter appropriate number in one isn't chosen
  //   console.log(PasswordLength)
  //   console.log(parseInt(PasswordLength));
  // }

  //! change concatinated password alphabet string into an array (bank)


  // loop that takes the available characters and concatinates them until the chosen password length is reached

  for (var i = 0; i < 8; i++) {

    var num = Math.floor(Math.random() * CharBank.length) + 1;
    PasswordCharacter = CharBank[num];

  }  
  //  var GeneratedPassword += PasswordCharacter;
  // 

  // var password = generatePassword(); // why is this line here
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// this was given 


