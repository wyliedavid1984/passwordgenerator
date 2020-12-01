# Passwordgenerator

## Description

We were given a basic layout for our HTML, CSS, and Javascript.  Our job was to create a function that would generate a random password.  On the website the user clicks on a button, and it will generate a password tailored to user preference.  Once the button is clicked, the user is prompted to give a specified length. After, the user confirms what specific parameters will be added to the password.  The generator will display a randomly generated password for the user to copy and paste wherever they want to use the password.

### Javascript Code

The application makes use of Javascript to do the required actions to generate a random password.  With the javascript provided, we first start off with an event listener, "button click".  When the button has been clicked, it starts the function of generatePassword. To start off with, I needed some global variable to work with.  Those variables held arrays of different types of character: number, special characters, lower case letters, upper case letters, and a master array to store the user's selected character types. After that, I moved into the function generatePassword.  I had to create several variables to hold the newPassword created, as well as the different options that the user will pick. The first variable stored a number from the prompt method to get a password length.  The specific length was supposed to be between 8 and 128 characters long.  I used an if statement to see whether the password length was correct or not.  If it wasn't, then the user is re-prompted to enter a number within the specified length. It is followed by a series of confirm methods that were equal to a variable with a corresponding name (i.e. "Do you want to include numbers?" was equal to useNum).  If the user didn't choose any preferences, they are alerted to pick at least one preference and re-prompted to pick a number from the start.  After that, the function starts to make an array of the user's preferences with some if statements.  For every if statement that is true or confirmed (based on the user preference), I push up an array into the master array using the push method that moves values into arrays.  I used the spread operator to get them all into a single array rather than having multiple arrays in a single array.  After the function has put together the master array, I use a for loop to iterate through the length that the user has provided us. Inside the for loop, I make use of Math methods to generate a random number.  I use that number to reference an index in the master array that picks out a character and stores that in a variable.  As each character is selected while the for loop is running, it is transformed into a string using the toString method, and is pushed up into the password variable. Once the for loop finishes, the new password is an array of strings separated by commas.  It needs to be a single string, so I used the join method to turn it into a single string. In order for the join method to work it has to have the results stored somewhere.  To do this I set the variable equal to itself using the join method. The password is completed at this point and then I just return the value that the variable newPassword held.

### CSS

The original css that was provided seemed a little bland.  I decide to change up the color scheme to make it a little less white.

## ScreenShots

<details>
<summary>Several screenshots the website and code</summary>

![The website with the first prompt](./images/length.png)
![The website after it has run the code and generated a password](./images/workingSite.png)
![The code get user preference](./images/userPreferences.png)
![The code that generates the user password](./images/generatePassword.png)
</details>

## Credits

* [W3 schools - Javascript links to method and other helpful tools](https://www.w3schools.com/js/default.asp)
* [Dzone website - An article on several ways to combine arrays](https://dzone.com/articles/ways-to-combine-arrays-in-javascript#:~:text=First%2C%20declare%20an%20empty%20array,called%20a%20two%2Ddimensional%20array.)
* [Stack Overflow- trouble shooting with errors](https://stackoverflow.com/questions/62910135/type-error-on-line-cannot-read-property-push-of-undefined)

## Link

* [Link to Password Generator](https://wyliedavid1984.github.io/passwordgenerator)