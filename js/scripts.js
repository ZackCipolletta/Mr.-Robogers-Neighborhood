function beepBoop(input, uName) {
  let userNum = parseInt(input); // converts string input to a number
  let returnArr = [];
  for(let i = 0; i <= userNum; i++) {  // adds value of i onto returnArr array
    returnArr.push(i); 
  }
  returnArr.forEach(function(element, i){ // runs a loop for each value in the return array
    let elToString = element.toString(); // converts element of the array to a string
    if(elToString.includes(3)) { // checks if string element contains a 3
      returnArr.splice(i, 1, "Won't you be my neighbor" + uName + "?"); // if the string does contain the specified value (in this case 3), the function will then remove 1 element at index position i and replace it with the given phrase. 
    } else if(elToString.includes(2)) { // checks if string element contains a 2
      returnArr.splice(i, 1, 'Boop');
    } else if(elToString.includes(1)) {  // checks if string element contains a 1
      returnArr.splice(i, 1, 'Beep');
    }
  });
  return returnArr;
}

function clearFunc(){
  const divEl = document.querySelector('.results'); // selects the element with class 'results' to the variable divEl
  document.getElementById('nameInput').value = ''; // erases any text remaining in the name input field on the apge
  document.getElementById('userNumberTocountTo').value = ''; // erases any text remaining in the input field asking which number to count to
  divEl.innerText = ''; // erases any information stored in the divEl element
}

function displayToPage(userInput) { 
  let newP = document.createElement('p'); // creates a new 'p' element
  const divEl = document.querySelector('.results'); // stores the elemen with the class 'results' in a variable
  newP.append(userInput); // appends the value of userInput to the newly created 'p' element
  divEl.appendChild(newP); // appends the 'p' element to the element stored in the divEl variable
  return  divEl;
}

function userName() { 
  let uName = document.getElementById('nameInput').value; // takes user name from input field
  uName = uName.trim().toLowerCase().charAt(0).toUpperCase() + uName.slice(1); //removes leading and trailing whitespace from user name, changes it to all lowercase, removes just the first letter and capitalizes it, adds the rest of the name (in lower case) back to the name.
  if(uName !== '') { // checks if name is not just an empty string
    uName = ' ' + uName; // adds a leading space to the user name so it can be used later when the function is called.
   }
  return uName;
}

function reverseEl() {
  const userInput = document.getElementById('userNumberTocountTo').value; //
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
  const userInput = document.getElementById('userNumberTocountTo').value;
  let toBeDisplayed = beepBoop(userInput, userName()).join(', ');
  displayToPage(toBeDisplayed);
}

window.addEventListener("load", function(){
  document.querySelector("button").addEventListener("click", submitFunc);  
  document.getElementById("clear").addEventListener("click", clearFunc);
  document.getElementById("reverse").addEventListener("click", reverseEl);
});