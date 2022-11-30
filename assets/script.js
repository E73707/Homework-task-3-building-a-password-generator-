// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters =
  'ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890 !"#$%&()*+,-./:<>?={}[]^_`~|'; // True True
var characters2 =
  'abcdefghijklmnopqrxtuvwxyz1234567890 !"#$%&()*+,-./:<>?={}[]^_`~|'; // False True
var characters3 =
  "ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890"; //True False
var characters4 = "abcdefghijklmnopqrxtuvwxyz1234567890"; // False False

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLen = document.querySelector("#passwordLen");
  var passwordLength = passwordLen.value;
  //   var capitalLetters = ;
  var checkedCapital = document.querySelector("#capitalLetters").checked;
  var checkedSpecial = document.querySelector("#specialCharacters").checked;
  var charactersTemp = "";
  console.log(checkedCapital, checkedSpecial);
  function generatePassword() {
    if (checkedCapital === false && checkedSpecial === false) {
      charactersTemp = characters4;
    } else if (checkedCapital === false && checkedSpecial === true) {
      charactersTemp = characters2;
    } else if (checkedCapital === true && checkedSpecial === false) {
      charactersTemp = characters3;
    } else {
      charactersTemp = characters;
    }
    var password2 = "";
    if (passwordLength > 128 || passwordLength < 1) {
      alert("Sorry, that password length is not valid. Please try again");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        password2 += charactersTemp.charAt(
          Math.floor(Math.random() * charactersTemp.length)
        );
      }
      passwordText.value = `Your unique password is ${password2}`;
    }
    // capitalLetters = capitalLetters.value;
    // console.log(capitalLetters);
  }
  generatePassword();
}

if (document.querySelector("#capitalLetters").checked === true) {
  console.log("Checked");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
