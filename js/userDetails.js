/*
██    ██ ███████ ███████ ██████      ██████  ███████ ████████  █████  ██ ██      ███████ 
██    ██ ██      ██      ██   ██     ██   ██ ██         ██    ██   ██ ██ ██      ██      
██    ██ ███████ █████   ██████      ██   ██ █████      ██    ███████ ██ ██      ███████ 
██    ██      ██ ██      ██   ██     ██   ██ ██         ██    ██   ██ ██ ██           ██ 
 ██████  ███████ ███████ ██   ██     ██████  ███████    ██    ██   ██ ██ ███████ ███████
*/
//Contains all the scripts for the register page.

//Clears the local storage and stores a new name.
function onLogin() {
  deleteUserDetails();
  storeName();
  location.reload();
}

function deleteUserDetails() {
  localStorage.removeItem("fname");
  localStorage.removeItem("lname");
  location.reload();
}

//Stores the input name of the user. Prints an alert if an empty name is provided.
function storeName() {
  let inputFname = document.getElementById("fname");
  let inputLname = document.getElementById("lname");
  if (inputFname.value.length == 0) {
    alert("Please provide a valid name.");
  } else {
    localStorage.setItem("fname", inputFname.value);
    localStorage.setItem("lname", inputLname.value);
  }
}

//Accepts an elementID and two strings to inject a string with the current username somewhere.
function injectUserName(elementId, stringStart, stringEnd) {
  const userName = localStorage.fname;
  if (userName !== undefined) {
    document.getElementById(elementId).innerHTML =
      stringStart + userName + stringEnd;
  }
}
