let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



let section = document.createElement("div");
section.setAttribute("class", "w-100 mb-5");

let sectionTitle = document.createElement("h2");
sectionTitle.innerHTML = "Campanii";

//append title

section.appendChild(sectionTitle) 

for (let j = 0; j < 3; j++) {

  let sectionButton = document.createElement("button");
  sectionButton.setAttribute("class", "accordion");
  sectionButton.innerHTML = "Q?"

  let panel = document.createElement("panel");
  panel.setAttribute("class", "panel");

  let answer = document.createElement("p");
  answer.innerHTML = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`;

  //append

  panel.appendChild(answer)
  section.appendChild(sectionButton)
  section.appendChild(panel)

  document.getElementById("QA").appendChild(section)
}
