// Assignment code here

function passwordQuestions() {
  var password = ""
  var passwordLength = window.prompt("How many characters would you like 8 to 128?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The password needs to be between 8 and 128 characters in length, try again.");

  } else {


    var upperCaseLetters = window.confirm("Your password needs a uppercase letter.");
    var lowerCaseLetters = window.confirm("Your password needs a lowercase character.");
    var specialCharacters = window.confirm("Your password needs a special character.");
    var numbers = window.confirm("Your password needs a number.");



    for (let i = password.length; i < passwordLength; i++) {
      if (upperCaseLetters && password.length < passwordLength) {
        var index = Math.floor(Math.random() * 26)
        password = password + getupperCaseLetters().charAt(index);
      }




      if (lowerCaseLetters && password.length < passwordLength) {
        var index = Math.floor(Math.random() * 26)
        password = password + getlowerCaseLetters().charAt(index);

      }



      if (specialCharacters && password.length < passwordLength) {
        var index = Math.floor(Math.random() * 9)
        password = password + getspecialCharacters().charAt(index);


      }


      if (numbers && password.length < passwordLength) {
        var index = Math.floor(Math.random() * 10)
        password = password + getnumbers().charAt(index);

      }

    }



  }




  return password
}

function getupperCaseLetters() {
  upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCaseLetters
}

function getlowerCaseLetters() {
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerCaseLetters
}

function getspecialCharacters() {
  var specialCharacters = "!@#$%^&*()";
  return specialCharacters
}

function getnumbers() {
  var numbers = "0123456789";
  return numbers

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@##$%^&*()";
  var password = passwordQuestions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
