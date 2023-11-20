let buttons = [
  {
    title: "Redirecționează",
    color: "blue",
    content: {
      linkTitle: ["Persoane Fizice", "Persoane Juridice"],
      links: ["./", "./"],
    },
  },
  {
    title: "Donează",
    color: "yellow",
    content: {
      linkTitle: ["Persoane Fizice", "Persoane Juridice"],
      links: ["./", "./"],
    },
  },
  {
    title: "Contracte",
    color: "red",
    content: {
      linkTitle: ["Sponsorizare în Bani", "Sponsorizare în Bunuri și Servicii"],
      links: ["./", "./"],
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

  // content
  let content = document.createElement("div");
  content.setAttribute("class", "content mt-3");

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
  buttonContainer.appendChild(button);
  buttonContainer.appendChild(content);
  document.getElementById("buttons-container").appendChild(buttonContainer);
}

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
