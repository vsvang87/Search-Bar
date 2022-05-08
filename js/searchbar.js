let userInput = document.getElementById("usernameInput");
let listNames = document.getElementById("name-list");
let allNamesDomCollection = document.getElementsByClassName("name");

//event listener
userInput.addEventListener("keyup", (event) => {
  let searchQuery = event.target.value.toLowerCase();
  console.log(allNamesDomCollection[3].textContent);
});
