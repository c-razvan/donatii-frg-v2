// Logo

let image = document.createElement("img");
image.setAttribute("class", "logo");
image.setAttribute("src", "./assets/Logo-FRG.svg");
image.setAttribute("alt", "Logo frgimnastica");

document.getElementById("logo-container").appendChild(image);

// Button

document
  .getElementById("collapse-button")
  .setAttribute("class", "navbar-toggler");
document
  .getElementById("collapse-button")
  .setAttribute("data-bs-toggle", "collapse");
document
  .getElementById("collapse-button")
  .setAttribute("data-bs-target", "#navbarSupportedContent");
document
  .getElementById("collapse-button")
  .setAttribute("aria-controls", "navbarSupportedContent");
document
  .getElementById("collapse-button")
  .setAttribute("aria-expanded", "false");
document
  .getElementById("collapse-button")
  .setAttribute("aria-label", "Toggle navigation");
document.getElementById("collapse-button").setAttribute("type", "button");

let navbarTogglerIcon = document.createElement("span");
navbarTogglerIcon.setAttribute("class", "navbar-toggler-icon");

document.getElementById("collapse-button").appendChild(navbarTogglerIcon);

// Elements

let linkList = [
  "Acasă",
  "Știri",
  "Evenimente",
  "Despre",
  "Întrebări",
  "Contact",
];

for (let i = 0; i < linkList.length; i++) {
  let element = document.createElement("li");
  element.setAttribute("class", "nav-line");

  let link = document.createElement("a");
  link.setAttribute("class", "fs-6 tab");
  link.setAttribute("href", `./${linkList[i]}.html`);
  link.innerHTML = `${linkList[i]}`;

  if (linkList[i] === "Acasă") {
    link.setAttribute("href", `https://frgimnastica.com`);
  }

  if (linkList[i] === "Știri") {
    link.setAttribute("href", `https://frgimnastica.com/news`);
  }

  if (linkList[i] === "Evenimente") {
    link.setAttribute("href", `https://frgimnastica.com/events`);
  }

  element.appendChild(link);

  document.getElementById("navbar-nav").appendChild(element);
}
