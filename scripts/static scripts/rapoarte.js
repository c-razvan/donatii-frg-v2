const QA = [
  {
    title: "2022",
    nume: "raport-2022.pptx",
  },
  {
    title: "2023",
    nume: "",
  },
];

//logic

for (let h = 0; h < QA.length; h++) {
  let state = QA[h];
  let section = document.createElement("div");
  section.setAttribute("class", "w-100 mb-5");

  let sectionTitle = document.createElement("h3");
  sectionTitle.setAttribute("class", "ms-4 mb-3");
  sectionTitle.innerHTML = state.title;

  //append title
  section.appendChild(sectionTitle);


    let sectionButton = document.createElement("a");
    sectionButton.setAttribute("class", "ms-4 text-decoration-none");
    sectionButton.setAttribute("href", `./rapoarte/${QA[h].nume}`);
    sectionButton.innerHTML = "Descarcă Raport";

    let panel = document.createElement("div");
    panel.setAttribute("class", "panel mt-3");

    let answer = document.createElement("p");

    if (QA[h].nume === "") {
      sectionButton.setAttribute(
        "class",
        "ms-4 text-decoration-none text-dark"
      );
      sectionButton.setAttribute("href", "#");
      sectionButton.innerHTML = "Raport Indisponibil";
    }

    //append
    panel.appendChild(answer);
    section.appendChild(sectionButton);
    section.appendChild(panel);
  

  document.getElementById("QA").appendChild(section);
}
