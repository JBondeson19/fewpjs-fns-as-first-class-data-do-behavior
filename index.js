/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(timeString){
  
  const hour = parseInt(timeString, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
  // takes string argument, which specifies 24 hr time
  //if time is earler than 12, return "good morning"
  //if time is b/w 12-5pm, return 'good afternoon'
  // if time is later than 5pm, return 'good evening'
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
