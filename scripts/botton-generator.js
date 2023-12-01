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

const buttonScriptPath = getScriptPath();
const buttonSubfolderPath = buttonScriptPath.replace(`scripts/${buttonScriptPath.split('/').pop()}`, "");

// buttons

let buttons = [
  {
    title: "Redirecționează",
    color: "blue",
    content: {
      linkTitle: ["3,5% - Persoane Fizice", "20% - Persoane Juridice"],
      links: [`${buttonSubfolderPath}`, `${buttonSubfolderPath}`],
    },
  },
  {
    title: "Donează",
    color: "yellow",
    content: {
      linkTitle: ["Persoane Fizice", "Persoane Juridice"],
      links: [`${buttonSubfolderPath}`, `${buttonSubfolderPath}`],
    },
  },
  {
    title: "Contracte",
    color: "red",
    content: {
      linkTitle: ["Sponsorizare în Bani", "Sponsorizare în Bunuri și Servicii"],
      links: [`${buttonSubfolderPath}`, `${buttonSubfolderPath}`],
    },
  },
];

for (let j = 0; j < buttons.length; j++) {
  // button container
  let buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button-container");

  // button
  let button = document.createElement("button");
  button.setAttribute(
    "class",
    `collapsible mt-3 buton-redirectionare button-select-${buttons[j].color}`
  );
  button.setAttribute("type", "button");
  button.innerHTML = `${buttons[j].title}`;

  // arrow indicator

  let indicator = document.createElement("img");
  indicator.setAttribute(
    "src",
    `${buttonSubfolderPath}/assets/icon/arrow.uturn.down.circle.fill.svg`
  );
  indicator.setAttribute("class", "indicator");

  // content
  let content = document.createElement("div");
  content.setAttribute("class", "content mt-3 hidden-card");
  content.setAttribute("id", `${j}`);

  for (let h = 0; h < buttons[j].content.links.length; h++) {
    // linkContainer
    let linkContainer = document.createElement("div");
    linkContainer.setAttribute("class", "link-container");

    // link
    let link = document.createElement("a");
    link.setAttribute("href", `${buttons[j].content.links[h]}`);
    link.innerHTML = `${buttons[j].content.linkTitle[h]}`;
    linkContainer.appendChild(link);
    content.appendChild(linkContainer);
  }

  //append
  button.appendChild(indicator);
  buttonContainer.appendChild(button);
  buttonContainer.appendChild(content);
  document.getElementById("buttons-container").appendChild(buttonContainer);
}

let indicator = document.getElementsByClassName("indicator");
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.classList.contains("hidden-card")) {
      indicator[content.id].classList.add("rotate");
      content.classList.remove("hidden-card");
      content.classList.add("show-card");
    } else {
      indicator[content.id].classList.remove("rotate");
      content.classList.add("hidden-card");
      content.classList.remove("show-card");
    }
  });
}
