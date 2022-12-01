// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters =
  'ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890!#"$%&()*+,-./:<>?={}[]^_`~|'; // True True True

// function deletes all capital letters from string of characters
function capNotChecked() {
  let characters2 = characters.slice(
    characters.indexOf("A", 0),
    characters.indexOf("a", 0)
  );
  characters = characters.replace(characters2, "");
}

//function deletes all special characters from string
function specialNotChecked() {
  let characters2 = characters.slice(
    characters.indexOf("!", 0),
    characters.length
  );
  characters = characters.replace(characters2, "");
}

// function deletes all numbers from string
function numbersNotChecked() {
  let characters2 = characters.slice(
    characters.indexOf("1", 0),
    characters.indexOf("!", 0)
  );
  characters = characters.replace(characters2, "");
  characters = characters.replace("0", "");
}

// tests if the inputted value contains a non-number value
function isNum(value) {
  return /^\d+$/.test(value);
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLen = document.querySelector("#passwordLen");
  var passwordLength = passwordLen.value;
  var checkedCapital = document.querySelector("#capitalLetters").checked;
  var checkedSpecial = document.querySelector("#specialCharacters").checked;
  var checkedNumbers = document.querySelector("#numbers").checked;

  function generatePassword() {
    if (checkedCapital === false) {
      capNotChecked();
    }
    if (checkedSpecial === false) {
      specialNotChecked();
    }
    if (checkedNumbers === false) {
      numbersNotChecked();
    }

    var password2 = "";
    if (
      passwordLength > 128 ||
      passwordLength < 1 ||
      isNum(passwordLength) === false
    ) {
      alert("Sorry, that is not a valid entry. Please try again");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        password2 += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      passwordText.value = `Your unique password is\n\n${password2}`;
    }
  }

  generatePassword();
  characters =
    'ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890!#"$%&()*+,-./:<>?={}[]^_`~|';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
