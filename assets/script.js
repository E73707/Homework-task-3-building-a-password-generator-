// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters =
  'ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890 !"#$%&()*+,-./:<>?={}[]^_`~|';
var characters2 =
  'abcdefghijklmnopqrxtuvwxyz1234567890 !"#$%&()*+,-./:<>?={}[]^_`~|';
var characters3 =
  "ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890";
var characters4 = "abcdefghijklmnopqrxtuvwxyz1234567890";
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLen = document.querySelector("#passwordLen");
  var passwordLength = passwordLen.value;

  function generatePassword() {
    var password2 = "";
    if (passwordLength > 128 || passwordLength < 1) {
      alert("Sorry, that password length is not valid. Please try again");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        password2 += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      passwordText.value = `Your unique password is ${password2}`;
    }
  }
  generatePassword();
}

if (document.querySelector("#capitalLetters").checked === true) {
  console.log("Checked");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
