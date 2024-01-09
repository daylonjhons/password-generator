var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = parseInt(prompt("enter password length (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("include lowercase characters ?");
  var includeUppercase = confirm("include uppercase characters ?");
  var includeNumeric = confirm("include numeric characters ?");
  var includeSpecial = confirm("include special characters ?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("please select at least one character type.");
    return "";
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }

  return generatedPassword; 
}
