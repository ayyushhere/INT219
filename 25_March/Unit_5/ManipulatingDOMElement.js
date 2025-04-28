//Changing content
element.innerHTML = "New Content";
element.textContent = "New text";

//Changing attributes
element.setAttribute("src", "image.jpg");
let attr = element.getAttribute("src");
element.removeAttribute("alt");

//Changing styles
element.style.color = "red";
element.style.fontSize = "20px";

//Adding andd removing Classes
element.classList.add("new-class");
element.classList.remove("old-clas");
element.classList.add("active");
