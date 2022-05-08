let userInput = document.getElementById("usernameInput");
let listNames = document.getElementById("name-list");
let allNamesDomCollection = document.getElementsByClassName("name");

//event listener
userInput.addEventListener("keyup", (event) => {
  let searchQuery = event.target.value.toLowerCase();

  //loop through all names
  for (let counter = 0; counter < allNamesDomCollection.length; counter++) {
    const currentName =
      allNamesDomCollection[counter].textContent.toLowerCase();
    //if else statement
    if (currentName.includes(searchQuery)) {
      allNamesDomCollection[counter].style.display = "block";
    } else {
      allNamesDomCollection[counter].style.display = "none";
    }
  }
});
