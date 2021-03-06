# My-Password-Generator
the purpose of this homework was to create a random password for the user. It needed to have a series of prompts that asked the user specific questions about what they wanted in their password including: The desired length, Uppercase/Lowercase letters, Numbers, and Special Characters. Once the user has chosen what they want, a password based on the user's chioces will appear.

## How I did it
First I had to set different variables for all of the character I wanted to include. Each variable also needed an array to store all the data for each possible character. After I had the variables set up, I needed to write a function to start the password generator. In the function, I added a window prompt for the amount of characters a user wanted. If the user input a number outside the specified range, it would send an alert and push the user to re-enter the desired input. After that, I put in a series of confirm windows asking the user about uppercase/lowercase letters, numbers, and special characters. I then had to set a series of if statements for true/false inputs to push the array with the desired characters to the generator. Then I put the data from the password generator into a seperate function to output the new password to the user with random characters to mix into it.

## The Result
When the user clicks generate password, it goes through a series of prompts and then outputs a brand new random password for the user.

### link to my deployed site
https://jared-n2.github.io/My-Password-Generator/

### Screenshots
![screenshot](/Screenshot-9.png)
![screenshot](/Screenshot-10.png)