function beepBoop(input, uName) {
  let userNum = parseInt(input); // converts string input to a number
  let returnArr = [];
  for(let i = 0; i <= userNum; i++) {  // adds value of i onto returnArr array
    returnArr.push(i); 
  }
  returnArr.forEach(function(element, i){ // runs a loop for each value in the return array
    let elToString = element.toString(); // converts element of the array to a string
    if(elToString.includes(3)) { // checks if string element contains a 3
      returnArr.splice(i, 1, "Won't you be my neighbor" + uName +"?"); // if the string does contain the specified value (in this case 3), the function will then remove 1 element at index position i and replace it with the given phrase. 
    } else if(elToString.includes(2)) { // checks if string element contains a 2
      returnArr.splice(i, 1, 'Boop');
    } else if(elToString.includes(1)) {  // checks if string element contains a 1
      returnArr.splice(i, 1, 'Beep');
    }
  });
  return returnArr;
}

function clearFunc(){
  const divEl = document.querySelector('.results');
  document.getElementById('nameInput').value = '';
  document.getElementById('beepBoopInput').value = '';
  divEl.innerText = '';
}

function displayToPage(el) {
  let newP = document.createElement('p');
  const divEl = document.querySelector('.results');
  newP.append(el);
  divEl.appendChild(newP);
  return  divEl;
}

function userName() {
  let uName = document.getElementById('nameInput').value;
  uName = uName.trim().toLowerCase().charAt(0).toUpperCase() + uName.slice(1);
  return uName;
}

function reverseEl() {
  const userInput = document.getElementById('beepBoopInput').value;
  let toBeDisplayed = beepBoop(userInput, userName());
  let newP = document.createElement('p');
  const divEl = document.querySelector('.results');
  const reverseEl = toBeDisplayed.reverse().join(', ');
  newP.append(reverseEl);
  divEl.appendChild(newP);
  return  divEl;
}

function submitFunc(){
  userName();
  const userInput = document.getElementById('beepBoopInput').value;
  let toBeDisplayed = beepBoop(userInput, userName()).join(', ');
  displayToPage(toBeDisplayed);
}

window.addEventListener("load", function(){
  document.querySelector("button").addEventListener("click", submitFunc);  
  document.getElementById("clear").addEventListener("click", clearFunc);
  document.getElementById("reverse").addEventListener("click", reverseEl);
});