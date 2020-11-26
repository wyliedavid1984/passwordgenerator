
// All global variables

var generateBtn = document.querySelector("#generate");

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specCharArr = ["\`", "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "\"", "\\", "!", "@", "#", "$", "5", "^", ".", ",", ";", "\/", "-", "_", "\="];

var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



// Write password to the #password input
function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Creates an object to store users password options
function getOptions() {

    // prompt user to pick a length of password between 8 and 128
    var userLength = parseInt(prompt("Please, select how long you would like your password to be. (between 8 and 128 characters)"));

    // Make sure that user picks within given numbers
    if (userLength < 8 || userLength > 128) {
        alert("Please, choose a number between 8 and 128");
        getOptions();
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

    // Making sure that user pick a single option for the password
    if (
        useNum === false &&
        useSpecChar === false &&
        useLowerCase === false &&
        useUpperCase === false) {
        alert("Please select at least one character type.");
        getOptions();
        return;
    }
    // Initially setting up all password options 
    var passOptions = {
        passwordLength: userLength,
        hasNum: useNum,
        hasSpecChar: useSpecChar,
        hasLower: useLowerCase,
        hasUpper: useUpperCase
    }
    return passOptions;
};

// Creating a random element from selected array

function getRandomElement(arr) {

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;

};

function generatePassword() {


    // Getting users options and declaring new variables

    var userOptions = getOptions();

    console.log(userOptions);

    var newPassword;

    var masterArr = [];

    // Getting all parameters setup for the new password
    
    if (userOptions.hasNum) {
        masterArr.concat(numArr);
    }
    console.log(masterArr)
    if (userOptions.hasSpecChar) {
        masterArr.concat(specCharArr);
    }
    console.log(masterArr)
    if (userOptions.hasLower) {
        masterArr.concat(lowerCaseArr);
    }
    console.log(masterArr)
    if (userOptions.hasUpper) {
        masterArr.concat(upperCaseArr);
    }
    console.log(masterArr)

    // Looping through to create a new password

    for (var i = 0; i < userOptions.passwordLength; i++) {
        newPassword.push(getRandomElement(masterArr));
        
    };
    console.log(newPassword);
    return newPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);