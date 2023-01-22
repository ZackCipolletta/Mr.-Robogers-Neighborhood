# programming-language-suggester
An application demonstrating knowledge of arrays, loops and branching utilizing user input.

#### By Zachary Cipolletta


## Technologies used

* JavaScript
* HTML
* CSS

## Description

This is an app that takes a users number and counts up to that number, displaying the resutlts on the page.  The app replaces all instances of a number containing a 1 with 'Beep!', unless it contains a 2 in which case the number is replaced with 'Boop!', and finally if the number contains a 3 it is replaced with the phrase 'Won't you be my neighbor?'.

There is also an option to display the resluts in reverse. That is counting down from the given number to 0.  A user can also enter in their name and the app will insert it into the phrase 'Won't you be my neighbor ____?'.


## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser.

## Known Bugs

 * No known bugs at this time.
 

## License
MIT

Copyright (c) 1/20/2023 Zachary Cipolletta


## TDD tests
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number, replacing the number 1 with the string 'Beep!' " 
Code: beepBoop(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number, replacing any number containing 1 with the string 'Beep!' " 
Code: beepBoop(23);
Expected Output: [0, "Beep!", 2, 3, [...], 9, "Beep!", "Beep!", "Beep!", "Beep!", [...], 20, "Beep!", 22, 23]

Test: "It should have all previous functionality unless the number contains 2, in which case it should replace the number with the string 'Boop!' " 
Code: beepBoop(23);
Expected Output: [0, "Beep!", "Boop!", 3, [...], 9, "Beep!", "Beep!", "Boop!", "Beep!", [...], "Boop", "Boop!", "Boop!", "Boop!"]

Test: "It should have all previous functionality unless the number contains 3, in which case it should replace the number with the phrase 'Won't you be my neighbor?'"  
Code: beepBoop(23);
Expected Output: [0, "Beep!", "Boop!", 'Won't you be my neighbor?', [...], 9, "Beep!", "Beep!", "Boop!", "'Won't you be my neighbor?'", [...], "Boop", "Boop!", "Boop!", "'Won't you be my neighbor?'"]

Test: "It should " 
Code: 
Expected Output: 

Test: "It should " 
Code: 
Expected Output: 

Test: "It should " 
Code: 
Expected Output: 
