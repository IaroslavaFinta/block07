/*
Pseudocode
    1.Open vsCode
    2.Create a new folder for block07 add a new html file
    3.Create a new js. extension file adn name it javascript.js
    4.in html file use shift+1 to have blank sheet
    5.In html file in head section enter script section with a link to js file using this "<script src="javascript2.js"></script>"
    5.Create a message for a user as a string with let data type
    6.Create three variables which calculation bring a result of a vault code, use different arithmetic operators like /+-*
    7.Use display box;
    8.Add comments for each line
*/

//Create a string for a user
let message =
"You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

// Create three variables and use arithmetic operators
let firstvariable = 7 + 3;

let secondvariable = 10 * 4;

let thirdvariable = 195 / 5;

//Create a dialog displaying the vault code
let secretcombination = `${firstvariable} - ${secondvariable} - ${thirdvariable}`;

alert(message + secretcombination);



