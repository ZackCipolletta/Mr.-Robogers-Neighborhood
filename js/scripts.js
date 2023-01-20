function beepBoop(input) {
  let userNum = parseInt(input); // converts string input to a number
  let returnArr = [];
  for(let i = 0; i <= userNum; i++) {  // adds value of i onto returnArr array
    returnArr.push(i); 
  };
  returnArr.forEach(function(element, i){ // runs a loop for each value in the return array
    let elToString = element.toString(); // converts element of the array to a string
    if(elToString.includes(3)) { // checks if string element contains a 3
      returnArr.splice(i, 1, "Won't you be my neighbor?") // if the string does contain the specified value (in this case 3), the function will then remove 1 element at index position i and replace it with the given phrase. 
    } else if(elToString.includes(2)) { // checks if string element contains a 2
      returnArr.splice(i, 1, 'Boop')
    } else if(elToString.includes(1)) {  // checks if string element contains a 1
      returnArr.splice(i, 1, 'Beep')
    }
  });
  console.log(returnArr);
}  