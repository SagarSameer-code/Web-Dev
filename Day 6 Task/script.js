// select paragraph and change its text
const paragraph = document.querySelector("#text");
paragraph.textContent = "Paragraph text changed using JavaScript";


const dynamicDiv = document.querySelector("#dynamic");

// change background color of empty div
dynamicDiv.style.backgroundColor = "lightblue";
dynamicDiv.style.padding = "10px";
dynamicDiv.style.marginTop = "10px";


const addBtn = document.querySelector("#add-btn");

// add new paragraph on button click
addBtn.addEventListener("click", function () {
  const p = document.createElement("p");
  p.textContent = "Button clicked";
  dynamicDiv.appendChild(p);
});


const toggleBtn = document.querySelector("#toggle-btn");
const heading = document.querySelector("#main-heading");

// toggle heading visibility
toggleBtn.addEventListener("click", function () {
  if (heading.style.display === "none") {
    heading.style.display = "block";
  } else {
    heading.style.display = "none";
  }
});




