const QA = [
  {
    title: "2022",
    question: ["Descarcă Raport"],
    nume: ["raport-2022.pptx"],
  },
  {
    title: "2023",
    question: ["Descarcă Raport"],
    nume: ["raport-2023.pptx"],
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

  for (let j = 0; j < state.question.length; j++) {
    let sectionButton = document.createElement("a");
    sectionButton.setAttribute("class", "ms-4 text-decoration-none");
    sectionButton.setAttribute("href", `./rapoarte/${QA[j].nume}`);
    sectionButton.innerHTML = state.question[j];

    let panel = document.createElement("div");
    panel.setAttribute("class", "panel mt-3");

    let answer = document.createElement("p");

    //append
    panel.appendChild(answer);
    section.appendChild(sectionButton);
    section.appendChild(panel);
  }

  document.getElementById("QA").appendChild(section);
}
