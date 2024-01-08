var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePasswork() {
  var passwordLength = parseInt(prompt("enter password length (between 8 and 128 charavters):"));
}

if (isNaN(passwordLength) || passwordLength < 8 ||passwordLength > 128) {
  alert("please enter a valid password length between 8 and 128 characters.");
  return"";
}
