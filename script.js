// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  // Use modals to prompt user to get information
  
  // prompt user to pick a length of password between 8 and 128
  // save input to a var
  // parseInt the user choice to make sure that it isn't a string
  var userLength = parseInt(prompt("Please, select how long you would like your password to be. (between 8 and 128 characters)"));
    
  //Stop user from pick an number outside of the available range 
  if( userLength < 8 || userLength > 128 ) {
    alert("Please, choose a number between 8 and 128");
    generatePassword();
    return;
    }
  
  // ask user if they want numbers in password
  //Variable that stores whether we will use numbers or not.
  var useNum = confirm("Do you want to have numbers in your Password");

  // ask user if they want special characters in password
  //Variable that stores whether we will use special characters or not.
  var useSpecChar = confirm("Do you want to have special characters in your Password");

  // ask user if they want lower case letters in password
  //Variable that stores whether we will use lower case letters or not.
  var useLowerCase = confirm("Do you want to have lower case letters in your Password");

  // ask user if they want upper case letters in password
  //Variable that stores whether we will use upper case letters or not.
  var useUpperCase = confirm("Do you want to have upper case letters in your Password");
  
  // All possible array to choose from
  
  var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var specArr = ["\`", "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "\"", "\\", "!", "@", "#", "$", "5", "^", ".", ",", ";", "\/", "-", "_", "\=" 
  ];

  var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var masterArr = [];

  // If the user doesn't pick any options 
    if (
      useNum === false &&
      useSpecChar === false &&
      useLowerCase === false &&
      useUpperCase === false ) {
      alert("Please select at least one character type.");
      generatePassword();
      return;
    }
  
  // If user wants numbers add to master array
    if (useNum === true){
      masterArr.push(...numArr);
      // push actually works, but they stay as separate arrays. concat just leave me with an empty array would like to see concat working though
      // this needs to be deleted after we get both possibilities working
    }

  // If user wants special character add to master array
    if (useSpecChar === true){
      masterArr.push(...specArr);
      }
    

  // If user wants lowercase letter add to master array
    if (useLowerCase === true){
      masterArr.push(...lowerCaseArr);
      }
    

  // If user wants upper case letters add to master array
    if (useUpperCase === true){
      masterArr.push(...upperCaseArr);
      }
    console.log(masterArr);
  
  
  // New variable to hold value of new password
  var newPassword;
  //Loop through userLength;
  for (var i = 0; i < userLength; i++) {
    var newUnit = (Math.floor(Math.random() * masterArr.length));
    newPassword.push(newUnit);
  };

  //outside of loop return newPass
  return newPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
