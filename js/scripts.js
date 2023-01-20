function beepBoop(input) {
  let userNum = parseInt(input);
  let returnArr = [];
  for(let i = 0; i <= userNum; i++) {
    returnArr.push(i);
  };
  returnArr.forEach(function(element, i){
    let elToString = element.toString();
    if(elToString.includes(1)) {
      returnArr.splice(i, 1, 'Beep')
    }
  });
  console.log(returnArr);
}  


//  function test2() { // returns an array containing string values of each number split into single digits. EX: [21, 22, 23] becomes ['2', '1', '2', '2', '2', '3'].
//   let testArr = [21, 22, 23];
//   let testArrToString = testArr.toString();
//   let testArrToStringSplit = testArrToString.split('');
//   console.log(testArrToStringSplit);
//  }




// function test(){
// let testArr = [21];
// let testArrSplit = testArr.split();
//   if(testArrSplit.includes(1)){
//     console.log('testArr includes a 1')
//   };
// }