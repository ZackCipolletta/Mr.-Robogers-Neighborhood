function beepBoop(input) {
  let userNum = parseInt(input); 
  let returnArr = [];
  for(let i = 0; i <= userNum; i++) {
    returnArr.push(i); 
  };
  returnArr.forEach(function(element, i){ 
    let elToString = element.toString(); 
    if(elToString.includes(3)) {
      returnArr.splice(i, 1, "Won't you be my neighbor?")
    } else if(elToString.includes(2)) {
      returnArr.splice(i, 1, 'Boop')
    } else if(elToString.includes(1)) { 
      returnArr.splice(i, 1, 'Beep')
    }
  });
  console.log(returnArr);
}  




// function beepBoop(input) {
//   let userNum = parseInt(input); // converts string input to a number
//   let returnArr = [];
//   for(let i = 0; i <= userNum; i++) {
//     returnArr.push(i); // adds value of i onto returnArr array
//   };
//   returnArr.forEach(function(element, i){ // runs a loop for each value in the return array
//     let elToString = element.toString(); // converts element of the array to a string
//     if(elToString.includes(1)) { // checks if string element contains a 1
//       returnArr.splice(i, 1, 'Beep') // if string element does contain a 1, replaces the value of that element at index position i with the string 'Beep'
//     }
//   });
//   console.log(returnArr);
// }  