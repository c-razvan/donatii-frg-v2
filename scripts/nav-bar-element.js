// get dynamic path

function getScriptPath() {
  const scriptElement = document.currentScript;

  if (scriptElement) {
    const scriptSrc = scriptElement.src;
    return scriptSrc;
  } else {
    console.error("document.currentScript is not supported in this browser.");
    return null;
  }
}

const navScriptPath = getScriptPath();
const navSubfolderPath = navScriptPath.replace(
  `scripts/${navScriptPath.split("/").pop()}`,
  ""
);

// Logo

let image = document.createElement("img");
image.setAttribute("class", "logo");
image.setAttribute("src", `${navSubfolderPath}/assets/Logo-FRG.svg`);
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
  "Despre Noi",
  "Întrebări",
  "Contact",
  "Înapoi la Site-ul FRG",
];

for (let i = 0; i < linkList.length; i++) {
  let element = document.createElement("li");
  element.setAttribute("class", "nav-line");

  let link = document.createElement("a");
  link.setAttribute("class", "fs-6 tab-header");
  link.innerHTML = `${linkList[i]}`;

  if (linkList[i] === "Acasă") {
    link.setAttribute("href", `${navSubfolderPath}/index.html`);
  }

  if (linkList[i] === "Știri") {
    link.setAttribute("href", `https://frgimnastica.com/news`);
  }

  if (linkList[i] === "Evenimente") {
    link.setAttribute("href", `https://frgimnastica.com/events`);
  }

  if (linkList[i] === "Despre Noi") {
    link.setAttribute("href", `${navSubfolderPath}/despre-noi.html`);
  }

  if (linkList[i] === "Întrebări") {
    link.setAttribute("href", `${navSubfolderPath}/intrebari.html`);
  }

  if (linkList[i] === "Contact") {
    link.setAttribute("href", `${navSubfolderPath}/contact.html`);
  }

  if (linkList[i] === "Înapoi la Site-ul FRG") {
    link.setAttribute("href", `https://frgimnastica.com`);
  }

  element.appendChild(link);

  document.getElementById("navbar-nav").appendChild(element);
}
