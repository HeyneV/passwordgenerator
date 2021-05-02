# Password Generator Starter Code

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
1. The series of questions prompts the user to selct a number between 8-128 as well as an uppercase and lowercase letter, number and special character.

WHEN prompted for password criteria
THEN I select which criteria to include in the password
1. The user is prompted to select okay for each character, but can also select cancel if they want to omit one of the characters.

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
1. The user is prompted in the first question to select a number between 8-128. If they select a number outside this range then they are taken back to the first question so they can select a number between 8-128. They can not proceed to the other questions without doing this.

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
1. The user has the option to select okay or cancel for the above character types.

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
1. If the user selects okay as prompted from the questions they will have a character from each category in their password.

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
1. If the user selects okay for each prompt as directed, then the password generated will match all the criteria.

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
1. The password is generated in the box provided below the questions.