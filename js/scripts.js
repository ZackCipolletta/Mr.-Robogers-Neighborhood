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
