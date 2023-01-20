function beepBoop(input) {
  let userNum = parseInt(input);
  let returnArr = [];
  for(let i = 0; i <= userNum; i++) {
    returnArr.push(i);
  };
  if(returnArr.includes(1)){
    let indexOf1 = returnArr.indexOf(1);
    returnArr.splice(indexOf1, 1, 'Beep');
  }
  console.log(returnArr);
}