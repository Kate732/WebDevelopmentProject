function myFunction() {
  var userInput, categories, category, ul, i;
  userInput = document.getElementsByClassName("Search").toUpperCase();
  categories = document.getElementById("Menu").getElementsByTagName("a");
  
  for (i = 0; i < categories.length; i++) {
    category = categories.getElementsByTagName("a")[i];
    if (category.innerHTML.toUpperCase().indexOf(userInput) > -1) {
      categories[i].style.display = "";
    } else {
      categories[i].style.display = "none";
    }
  }
}

document.getElementById("death").addEventListener("click", function() {
  this.style.opacity = "100%";
});

document.getElementById("CharPhoto").addEventListener("click", function() {
    document.getElementById("CharPhoto").src="DeanW2.jpg";
});
